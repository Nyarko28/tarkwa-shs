import type { Metadata } from "next"
import ClientAdmissionsPage from "./client-page"

// Key Dates Timeline Data
const keyDates = [
  {
    month: "JUNE",
    event: "BECE Examinations",
    description: "Complete your Basic Education Certificate Examination",
    status: "past",
    icon: "FileText",
  },
  {
    month: "AUGUST",
    event: "BECE Results Released",
    description: "Check your results and prepare for CSSPS application",
    status: "past",
    icon: "GraduationCap",
  },
  {
    month: "SEPTEMBER",
    event: "CSSPS Application Opens",
    description: "Submit your school preferences online including TARSCO",
    status: "critical",
    highlight: "CRITICAL",
    icon: "Calendar",
  },
  {
    month: "SEPTEMBER",
    event: "Placement Results",
    description: "GES releases placement results. Check your status",
    status: "important",
    highlight: "IMPORTANT",
    icon: "CheckCircle2",
  },
  {
    month: "OCTOBER",
    event: "Accept Placement",
    description: "Accept your placement online before deadline",
    status: "action",
    highlight: "ACTION REQUIRED",
    icon: "AlertCircle",
  },
  {
    month: "OCTOBER",
    event: "Reporting Date",
    description: "Report to TARSCO campus for registration",
    status: "start",
    highlight: "START DATE",
    icon: "MapPin",
  },
]

// CSSPS Process Steps
const csspsSteps = [
  {
    number: "01",
    title: "Pass BECE",
    description:
      "Complete your Basic Education Certificate Examination with good grades. TARSCO typically accepts aggregate scores of 6-15.",
    icon: "GraduationCap",
  },
  {
    number: "02",
    title: "Get BECE Results",
    description:
      "Obtain your BECE results slip and index number. Keep these safe as you'll need them for the online application.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Register on CSSPS Portal",
    description:
      "Visit cssps.gov.gh and create your account using your BECE index number and personal details. Keep your login credentials secure.",
    icon: "Users",
  },
  {
    number: "04",
    title: "Select Your Schools",
    description:
      "Choose up to 5 secondary schools in order of preference. Make TARSCO one of your top choices to increase your chances.",
    icon: "BookOpen",
  },
  {
    number: "05",
    title: "Submit Application",
    description:
      "Review all your selections carefully, then submit your application before the deadline. Print your acknowledgment slip.",
    icon: "CheckCircle2",
  },
  {
    number: "06",
    title: "Check Placement",
    description:
      "When placement results are released, check the CSSPS portal to see if you've been placed at TARSCO. Accept your placement immediately if successful.",
    icon: "Calendar",
  },
]

// Programmes with equal prominence
const programmes = [
  {
    name: "Business",
    description:
      "Accounting, Business Management, Economics, and related subjects preparing students for business careers.",
    icon: "📊",
    gradient: "from-[#006B3F] to-[#004d2d]",
  },
  {
    name: "General Arts",
    description:
      "Literature, History, Government, and humanities subjects for students interested in social sciences and arts.",
    icon: "📚",
    gradient: "from-[#FDB913] to-[#d99710]",
  },
  {
    name: "General Science",
    description: "Biology, Chemistry, Physics, Mathematics for students pursuing science and medical careers.",
    icon: "🔬",
    gradient: "from-[#006B3F] to-[#005530]",
  },
  {
    name: "Home Economics",
    description:
      "Food and Nutrition, Textiles, Management studies preparing students for hospitality and home management.",
    icon: "🏠",
    gradient: "from-[#FDB913] to-[#e6a711]",
  },
  {
    name: "Visual Arts",
    description: "Graphic Design, Painting, Sculpture, and creative arts for artistically talented students.",
    icon: "🎨",
    gradient: "from-[#006B3F] to-[#003d23]",
  },
]

// General Requirements
const requirements = [
  {
    title: "BECE Certificate",
    description: "Valid BECE certificate with aggregate score typically between 6-15",
    icon: "FileText",
  },
  {
    title: "Age Requirement",
    description: "Typically 12-16 years old at the time of admission",
    icon: "Clock",
  },
  {
    title: "Good Health",
    description: "Medical fitness certificate may be required upon admission",
    icon: "CheckCircle2",
  },
  {
    title: "Discipline Record",
    description: "Good conduct and behavior from previous school",
    icon: "Users",
  },
]

// Fees Structure
const feesData = {
  government: [
    { item: "Tuition", amount: "FREE" },
    { item: "Textbooks (partial)", amount: "FREE" },
    { item: "Examination Fees", amount: "FREE" },
  ],
  parental: [
    { item: "PTA Dues", amount: "GHS 150/term" },
    { item: "Uniforms & PE Kits", amount: "GHS 300-500" },
    { item: "Stationery & Supplies", amount: "GHS 200-300/term" },
    { item: "Boarding Fees (if applicable)", amount: "GHS 800-1,200/term" },
    { item: "Feeding (boarding)", amount: "GHS 1,000-1,500/term" },
    { item: "ID Cards & Misc", amount: "GHS 50-100" },
  ],
}

// FAQs
const faqs = [
  {
    q: "Can I apply directly to TARSCO without going through CSSPS?",
    a: "No. All Form 1 admissions to public senior high schools in Ghana, including TARSCO, are processed exclusively through the Computerized School Selection and Placement System (CSSPS) managed by the Ghana Education Service. Direct applications are not accepted.",
  },
  {
    q: "What aggregate score do I need to get into TARSCO?",
    a: "While cutoff points vary each year based on demand, TARSCO typically admits students with BECE aggregate scores between 6 and 15. However, your placement also depends on your school choices and overall competition.",
  },
  {
    q: "How many schools can I select in my CSSPS application?",
    a: "You can select up to 5 schools in order of preference. Make TARSCO one of your top choices to increase your chances of placement here.",
  },
  {
    q: "What happens if I'm not placed at TARSCO?",
    a: "If you're not placed at TARSCO initially, you may be placed at one of your other school choices. You can also participate in the second selection if available, or contact the school about possible transfers after the first term.",
  },
  {
    q: "Do I have to pay to apply through CSSPS?",
    a: "The CSSPS application process itself is FREE. However, you may need to pay a small fee for SMS notifications or printing. Be wary of anyone asking for money to 'guarantee' placement.",
  },
  {
    q: "What if I can't afford the parental fees?",
    a: "TARSCO offers scholarship opportunities and payment plans for families facing financial hardship. Contact our admissions office or guidance counselor to discuss options. Don't let financial concerns prevent you from accepting placement.",
  },
  {
    q: "Is boarding mandatory at TARSCO?",
    a: "No, we accept both boarding and day students. You can indicate your preference during registration after placement. Boarding is subject to availability.",
  },
  {
    q: "When do I need to report to TARSCO after placement?",
    a: "Reporting dates are announced by the Ghana Education Service after placement results. Typically, students report in October. You'll receive specific dates and requirements in your placement letter.",
  },
]

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to TARSCO through CSSPS (Computerised School Selection and Placement System). Learn about our admission process, requirements, programmes, fees, and important dates for SHS placement.",
  keywords: [
    "CSSPS Ghana",
    "SHS admissions",
    "TARSCO admissions",
    "school placement Ghana",
    "BECE placement",
    "TARSCO fees",
    "school selection Ghana",
  ],
  openGraph: {
    title: "Admissions | Join TARSCO",
    description: "Learn about the CSSPS admission process and join the TARSCO family.",
  },
}

export default function AdmissionsPage() {
  return (
    <ClientAdmissionsPage
      keyDates={keyDates}
      csspsSteps={csspsSteps}
      programmes={programmes}
      requirements={requirements}
      feesData={feesData}
      faqs={faqs}
    />
  )
}
