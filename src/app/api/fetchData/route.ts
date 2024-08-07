export async function GET() {
  try {
    const response = await fetch(
      "https://www.nytimes.com/puzzles/spelling-bee",
      { cache: "no-store" }
    );
    const textData = await response.text();
    const data = JSON.parse(
      textData.slice(
        textData.indexOf("gameData") + 11,
        textData.indexOf("}}", textData.indexOf("gameData")) + 2
      )
    );

    if (!data) {
      return new Response("Failed to fetch data", { status: 500 });
    }

    const result = data.today;
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
