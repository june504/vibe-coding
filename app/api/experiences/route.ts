import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    console.log("Fetching experiences from Supabase...");
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to fetch experiences", details: error.message },
        { status: 500 }
      );
    }

    console.log("Fetched experiences:", data?.length || 0);

    // 데이터베이스 형식을 API 응답 형식으로 변환
    const experiences = (data || []).map((exp) => ({
      period: exp.period,
      role: exp.role,
      details: exp.details || [],
    }));

    return NextResponse.json(experiences, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
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

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

