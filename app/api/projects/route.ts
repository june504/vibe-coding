import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    console.log("Fetching projects from Supabase...");
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to fetch projects", details: error.message },
        { status: 500 }
      );
    }

    console.log("Fetched projects:", data?.length || 0);

    // 데이터베이스 형식을 API 응답 형식으로 변환
    const projects = (data || []).map((project) => ({
      title: project.title,
      description: project.description,
      tags: project.tags || [],
      link: project.link || "",
      repo: project.repo || "",
      live: project.live || "",
      image: project.image || "",
      highlights: project.highlights || [],
    }));

    return NextResponse.json(projects, {
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

