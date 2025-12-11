import type { Metadata } from "next"
import NewsDetailPageClient from "./news-detail-page-client"

const newsArticles = [
  {
    id: 0,
    title: "TARSCO Celebrates 60 Years of Excellence and Legacy",
    date: "November 2022",
    category: "Anniversary",
    excerpt:
      'Tarkwa Senior High School celebrated its 60th anniversary with the theme "Achieving Academic Excellence Through Discipline for National Development." The milestone celebration highlighted six decades of transforming lives through education and character development.',
    image: "/images/tarsco-final-logo.jpg",
    author: "School Administration",
    content: `Tarkwa Senior High School (TARSCO) marked a historic milestone in November 2022 as it celebrated its 60th anniversary. The celebration was a testament to the institution's unwavering commitment to academic excellence and character development.

Founded in 1961, TARSCO has been a beacon of educational excellence for six decades, producing outstanding graduates who have made significant contributions to society locally and globally. The anniversary celebration was held under the theme "Achieving Academic Excellence Through Discipline for National Development," which perfectly captures the school's philosophy.

The events during the anniversary week included a non-denominational church service where the school community came together to give thanks for the milestone. A community cleaning exercise demonstrated TARSCO's commitment to environmental stewardship and social responsibility.

Sports enthusiasts enjoyed friendly soccer matches and inter-school games that showcased the athletic prowess of TARSCO students. The homecoming brought back former students who shared their experiences and success stories, inspiring current students to excel.

A highlight of the celebration was the mentoring and career guidance sessions where alumni addressed current students about various career paths and opportunities. Health screening services were made available to students and staff, demonstrating the school's holistic approach to student welfare.

The fundraising dance dinner was well-attended and raised significant funds for the school's development projects. The cadet parade displayed the discipline and military bearing that TARSCO instills in its students, while the anniversary durbar brought together students, staff, parents, and community members in a grand celebration of the school's achievements.

During the anniversary, the Past Students Association (TARPSA) announced plans to construct an ultra-modern, two-storey, 2000-seater dining hall with a spacious kitchen, estimated to cost GH6.5 million. This project aims to address the current dining hall's capacity limitations, as students currently eat in shifts.

As TARSCO looks toward the future, the school remains committed to maintaining its standards of excellence while embracing modern educational innovations and preparing students for the challenges of the 21st century.`,
    isFeatured: true,
  },
  {
    id: 1,
    title: "TARSCO Wins Regional Science Olympiad",
    date: "November 15, 2024",
    category: "Achievement",
    excerpt:
      "Our science team triumphed in the regional competition, showcasing excellence in innovation and research.",
    image: "/science-olympiad.jpg",
    author: "Mr. Kwesi Boateng",
    content: `TARSCO's Science Olympiad team has achieved a remarkable victory in the regional competition, demonstrating the school's commitment to STEM education and innovation. The team competed against schools from across the region and emerged victorious through their innovative approaches and rigorous preparation.

The competition tested students' knowledge and practical skills in various scientific disciplines including biology, chemistry, physics, and environmental science. Our students showcased exceptional problem-solving abilities and scientific thinking throughout the competition.

This achievement reflects the dedication of our science teachers and the hard work of our student competitors. The school continues to invest in science facilities and resources to support such achievements and foster a culture of scientific inquiry among students.`,
  },
  {
    id: 2,
    title: "New Science Laboratory Inauguration",
    date: "November 10, 2024",
    category: "Infrastructure",
    excerpt: "State-of-the-art laboratory facility officially opened to support advanced STEM learning.",
    image: "/science-lab.jpg",
    author: "Dr. Kwame Asante",
    content: `TARSCO is proud to announce the inauguration of a state-of-the-art science laboratory facility. This new addition to our campus represents a significant investment in modern science education and research infrastructure.

The laboratory is equipped with contemporary equipment and technology that will enable students to conduct advanced experiments and research projects. The facility includes separate sections for biology, chemistry, and physics, each designed to optimize learning outcomes.

The new laboratory will support our commitment to hands-on, inquiry-based science education, allowing students to apply theoretical knowledge in practical settings. This investment demonstrates the school's dedication to providing students with world-class educational facilities.`,
  },
  {
    id: 3,
    title: "Annual Sports Day Celebrated",
    date: "November 5, 2024",
    category: "Events",
    excerpt: "Students showcase athletic prowess in friendly competitions across multiple sports disciplines.",
    image: "/sports-day.jpg",
    author: "Coach Ama Mensah",
    content: `The annual TARSCO Sports Day was celebrated with great enthusiasm and excitement. Students from all year groups participated in various track and field events, displaying exceptional athletic talent and competitive spirit.

Events included sprints, long-distance races, relay races, long jump, high jump, shot put, and other field events. Inter-house competitions added excitement as students competed for their respective houses, with house pride on full display.

The Sports Day not only promotes physical fitness and healthy competition but also builds camaraderie and team spirit among students. Winners were recognized at the closing ceremony, with various awards presented to outstanding performers and dedicated athletes.`,
  },
  {
    id: 4,
    title: "Admissions Portal Now Open",
    date: "October 28, 2024",
    category: "Admissions",
    excerpt: "Applications for 2025 intake now being accepted. Deadline is December 31, 2024.",
    image: "/admissions.jpg",
    author: "Registrar's Office",
    content: `The admissions portal for the 2025 academic year is now open. Prospective students and parents are invited to submit their applications before the December 31, 2024 deadline.

Applications can be submitted online through our admissions portal. Interested candidates must meet the prerequisites and requirements as specified in the admissions guidelines. We encourage qualified students from all backgrounds to apply.

TARSCO admits students on merit and also considers factors such as character, leadership potential, and extracurricular achievements. For more information about the application process, please visit our Admissions page or contact the Registrar's Office.`,
  },
  {
    id: 5,
    title: "Environmental Sustainability Initiative",
    date: "October 20, 2024",
    category: "Community",
    excerpt: "TARSCO commits to green campus through tree-planting and waste management programs.",
    image: "/environmental-initiative.jpg",
    author: "Environmental Club",
    content: `TARSCO has launched a comprehensive environmental sustainability initiative aimed at creating a greener campus and fostering environmental consciousness among students.

The initiative includes a tree-planting program that will enhance the campus landscape while contributing to environmental conservation. Students and staff are actively involved in planting trees and maintaining green spaces across the campus.

Additionally, a waste management program has been implemented to promote recycling and reduce waste. Students are being educated about environmental conservation and are encouraged to adopt sustainable practices both on campus and in their communities.

This initiative aligns with TARSCO's commitment to holistic education that includes environmental stewardship and social responsibility.`,
  },
  {
    id: 6,
    title: "Alumni Network Expands Globally",
    date: "October 15, 2024",
    category: "Alumni",
    excerpt: "Former students now working in 25+ countries strengthen connections through online platform.",
    image: "/alumni-network.jpg",
    author: "Alumni Relations",
    content: `The TARSCO Alumni Network has expanded significantly, now reaching former students in over 25 countries across Africa, Europe, North America, and Asia. An online platform has been established to facilitate networking and connections among alumni.

Through the platform, alumni can reconnect with classmates, share professional experiences, and mentor current students. The network serves as a powerful resource for students seeking career guidance and international opportunities.

Alumni have also been instrumental in supporting school programs and initiatives, demonstrating their continued connection to TARSCO and commitment to giving back to their alma mater.`,
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const articleId = Number.parseInt(params.id)
  const article = newsArticles.find((a) => a.id === articleId)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, "TARSCO news", "school updates"],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function NewsPage({ params }: { params: { id: string } }) {
  const articleId = Number.parseInt(params.id)
  const article = newsArticles.find((a) => a.id === articleId)

  // Pass the found article and all articles to the client component
  return <NewsDetailPageClient article={article} allArticles={newsArticles} articleId={articleId} />
}
