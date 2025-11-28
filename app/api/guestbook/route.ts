import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 방명록 목록 조회
export async function GET() {
  try {
    console.log("Fetching guestbook entries from Supabase...");
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to fetch guestbook entries", details: error.message },
        { status: 500 }
      );
    }

    console.log("Fetched entries:", data?.length || 0);

    // UUID를 문자열로 변환하고 형식 맞추기
    const entries = (data || []).map((entry) => ({
      id: entry.id,
      name: entry.name,
      message: entry.message,
      createdAt: entry.created_at,
    }));

    return NextResponse.json(entries, {
      status: 200,
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    console.error("Error:", error);
    console.error("Error stack:", error?.stack);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message },
      { status: 500 }
    );
  }
}

// 방명록 작성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // 유효성 검사
    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 메시지는 필수입니다." },
        { status: 400 }
      );
    }

    if (name.trim().length === 0 || message.trim().length === 0) {
      return NextResponse.json(
        { error: "이름과 메시지는 비어있을 수 없습니다." },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json(
        { error: "이름은 50자 이하여야 합니다." },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: "메시지는 500자 이하여야 합니다." },
        { status: 400 }
      );
    }

    console.log("Creating guestbook entry:", { name: name.trim(), message: message.trim() });
    const { data, error } = await supabase
      .from("guestbook")
      .insert([
        {
          name: name.trim(),
          message: message.trim(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to create guestbook entry", details: error.message },
        { status: 500 }
      );
    }

    console.log("Created entry:", data);

    const newEntry = {
      id: data.id,
      name: data.name,
      message: data.message,
      createdAt: data.created_at,
    };

    return NextResponse.json(newEntry, {
      status: 201,
      headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    console.error("Error in POST:", error);
    console.error("Error stack:", error?.stack);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message },
      { status: 500 }
    );
  }
}

// 방명록 삭제
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "삭제할 방명록 ID가 필요합니다." },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("guestbook")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to delete guestbook entry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "방명록이 삭제되었습니다." },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error: any) {
    console.error("Error in POST:", error);
    console.error("Error stack:", error?.stack);
    return NextResponse.json(
      { error: "Internal Server Error", details: error?.message },
      { status: 500 }
    );
  }
}

// CORS 옵션 처리
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

