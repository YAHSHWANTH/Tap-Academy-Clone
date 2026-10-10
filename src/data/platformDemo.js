import {
  BarChart3,
  Bot,
  ClipboardList,
  Code2,
  LayoutDashboard,
  PenTool,
} from "lucide-react";

export const platformTabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Student Dashboard",
    description:
      "Comprehensive analytics and insights to track your learning progress, attendance, and performance scores.",
    highlights: ["Progress tracking", "Weekly reports", "Skill radar charts"],
  },
  {
    id: "assignments",
    label: "Assignments",
    icon: ClipboardList,
    title: "Smart Assignments",
    description:
      "Auto-graded coding assignments with instant feedback and mentor review for every submission.",
    highlights: ["Auto-grading", "Code review", "Deadline reminders"],
  },
  {
    id: "editor",
    label: "AI Editor",
    icon: Code2,
    title: "Agentic Code Editor",
    description:
      "Built-in IDE with AI pair programming, syntax hints, and real-time error detection.",
    highlights: ["AI assistance", "Live debugging", "Project templates"],
  },
  {
    id: "questions",
    label: "Company Qs",
    icon: BarChart3,
    title: "Company Questions",
    description:
      "Curated question bank from 500+ companies with difficulty tags and solution walkthroughs.",
    highlights: ["500+ companies", "Topic-wise filters", "Video solutions"],
  },
  {
    id: "bot",
    label: "AI Bot",
    icon: Bot,
    title: "TAP Academy AI Bot",
    description:
      "24/7 AI tutor for doubt resolution, concept explanations, and interview prep guidance.",
    highlights: ["Instant answers", "Code explanations", "Interview tips"],
  },
  {
    id: "tests",
    label: "Weekly Tests",
    icon: PenTool,
    title: "Weekly Assessments",
    description:
      "Timed weekly tests simulating real interview environments to benchmark your readiness.",
    highlights: ["Timed tests", "Leaderboards", "Performance analytics"],
  },
];
