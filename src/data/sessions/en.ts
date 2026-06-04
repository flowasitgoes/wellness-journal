import type { Session } from "@/data/sessions/types";

export const enSessions: Session[] = [
  {
    slug: "day06",
    dayNumber: 6,
    date: "2026-06-04",
    duration: "~60 minutes",
    title: "Functional Pattern Training & Breathwork",
    summary:
      "Core stability, glute activation, movement awareness, and vision-oriented breathwork.",
    focus:
      "Core Stability · Glute Activation · Movement Awareness · Vision-Oriented Breathwork",
    structure: [
      "Functional Pattern Training (~30 min)",
      "Breathwork (~20–30 min)",
    ],
    exercises: [
      {
        name: "Resistance Band Walk (Monster Walk)",
        volume: "Forward & Back × 4 Rounds",
        focus:
          "Gluteus Maximus, Gluteus Medius, Core Stability, Hip Stability",
        cues: [
          "Engage the core before moving",
          "Initiate movement from the glutes",
          "Keep knees slightly wider than the toes",
          "Move slowly and deliberately",
        ],
      },
      {
        name: "Squat",
        volume: "10 Reps × 4 Rounds",
        focus: "Glutes, Core, Quadriceps, Hamstrings",
        cues: [
          "Maintain a neutral spine",
          "Keep the core active",
          "Drive upward through the hips and glutes",
        ],
      },
      {
        name: "Single-Arm Lateral Raise",
        volume: "5 Reps × 4 Rounds",
        focus:
          "Obliques, QL, Anti-Lateral Flexion Stability, Shoulder Control",
        cues: [
          "Resist leaning toward the weighted side",
          "Maintain an upright posture",
          "Allow the core to stabilize the body",
        ],
      },
      {
        name: "Band Front Raise",
        focus:
          "Core Engagement, Shoulder Stability, Integrated Body Control",
        cues: [
          "Maintain continuous core tension",
          "Avoid leaning backward",
          "Keep the rib cage and pelvis aligned",
        ],
      },
    ],
    breathwork: [
      {
        title: "Breathing Pattern",
        items: [
          "Gentle inhalation",
          "Gentle exhalation",
          "Minimal breath holding",
        ],
      },
      {
        title: "Mental & Emotional Focus",
        items: ["Gratitude", "Dreams & Vision", "Visualization", "Future Self"],
      },
      {
        title: "Visualization Themes",
        items: [
          "What I want to create",
          "How I want to create",
          "How my goals could become reality",
          "Possible paths & creative combinations",
          "New opportunities and possibilities",
          "Future experiences aligned with my strengths, interests, and values",
        ],
      },
    ],
    experience: [
      {
        title: "Physical",
        items: [
          "Deep relaxation",
          "Reduced tension",
          "Calm body awareness",
        ],
      },
      {
        title: "Mental",
        items: [
          "Clear awareness",
          "Half-awake / half-asleep state",
          "Mild hypnotic quality",
          "Reduced internal chatter",
        ],
      },
      {
        title: "Feelings",
        items: [
          "Connection to possibilities, dreams, and aspirations",
          "Stepping outside familiar mental frameworks",
        ],
      },
    ],
    themes: [
      {
        label: "Body",
        text: "Glute activation, core stability, coordination, postural awareness",
      },
      {
        label: "Breath",
        text: "Relaxation, calmness, confidence, peace",
      },
      {
        label: "Mind",
        text: "Gratitude, vision, future-oriented thinking, creation mindset",
      },
    ],
    reflection:
      "The physical training focused on learning new glute- and core-activation exercises, movement education, proper technique, and guided practice. The breathwork emphasized relaxation, gratitude, future aspirations, and exploring new possibilities. Overall, the session felt less like performance training and more like an introduction to new ways of moving, breathing, thinking, and relating to both the body and mind.",
  },
];
