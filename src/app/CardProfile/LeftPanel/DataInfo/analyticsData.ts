// data/analyticsData.ts

export interface AnalyticsItem {
  title: string;
  score?: number;
  maxScore?: number;
  description: string;
}

export interface AnalyticsReport {
  summary: string;
  items: AnalyticsItem[];
  conclusion: string;
}

export const analyticsReport: AnalyticsReport = {
  summary:
    "Bharat delivered a well-structured pitch with strong key-point coverage (4.0) and solid confidence (3.4). However, the pitch showed moderate performance in pain-point coverage and feature demonstration (both 3.0), with notable gaps in competition comparison (2.2). Strengthening competitor differentiation and customer pain alignment can significantly improve overall impact.",
  items: [
    {
      title: "Key-points Coverage",
      score: 4.0,
      maxScore: 5,
      description:
        "Bharat demonstrated strong alignment with key messaging points, covering most of the essential sales arguments effectively. The structure followed expected guidelines and delivered clear product positioning.",
    },
    {
      title: "Pain-points Coverage",
      score: 3.0,
      maxScore: 5,
      description:
        "Pain points were addressed moderately well, though there’s room to deepen empathy and tailor messaging more sharply to customer challenges. Consider expanding on real-world use cases or objections.",
    },
    {
      title: "Feature Demonstration",
      score: 3.0,
      maxScore: 5,
      description:
        "Feature explanation was clear but somewhat generic. While the benefits were mentioned, the demo lacked visual or comparative reinforcement. Adding context to why specific features matter could boost engagement.",
    },
    {
      title: "Competition Comparison",
      score: 2.2,
      maxScore: 5,
      description:
        "This area was relatively underdeveloped. The video briefly mentioned competitors but did not clearly differentiate the product. Future pitches should emphasize unique selling points and competitive advantages more directly.",
    },
    {
      title: "Overall Confidence",
      score: 3.4,
      maxScore: 5,
      description:
        "Bharat’s delivery showed good command and a positive tone, although a few moments lacked vocal energy or pace variation. With slightly more modulation and assertiveness, this score could reach a higher tier.",
    },
  ],
  conclusion:
    "Advisor needs focused improvement efforts on enhancing competitive storytelling and enriching pain-point articulation to elevate pitch impact. The base delivery is solid and can be made more compelling with deeper narrative hooks.",
};
