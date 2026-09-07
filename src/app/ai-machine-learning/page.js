export const metadata = { title: "AI and Machine learning | Byte Innovations", description: "AI product development and machine learning engineering." };

const asset = (file) => `/images/ai-machine-learning-figma/${file}`;
const developmentServices = [
  "AI SaaS Products", "Intelligent Web Applications", "AI Mobile Applications", "Predictive Analytics Solutions",
  "Recommendation Engines", "Computer Vision Applications", "Custom Machine Learning Models", "AI Product Integration",
];
const conversationSolutions = [
  ["Virtual Assistants", "raw-19.svg"], ["AI Chatbots", "raw-20.svg"], ["Voice AI Solutions", "raw-21.svg"], ["Intent Recognition", "raw-22.svg"],
  ["Customer Support Automation", "raw-23.svg"], ["Knowledge-Based Assistants", "raw-24.svg"], ["Omnichannel Conversational Experiences", "raw-25.svg"], ["Natural Language Understanding (NLU)", "raw-26.svg"],
];
const aiProcess = [
  "AI Strategy Development", "AI Agent Development", "AI Product Development", "Conversational AI", "RAG AI Development", "Data & LLM Engineering",
];
const ragCapabilities = [
  "Enterprise Knowledge Chatbots", "Internal Documentation Search", "AI Knowledge Assistants", "Document Intelligence",
  "Semantic Search", "Vector Database Implementation", "Secure Information Retrieval", "LLM Integration",
];
const engineering = [
  "Data Pipeline Development", "Data Preparation & Cleaning", "Vector Database Architecture", "LLM Fine-Tuning",
  "Prompt Engineering", "AI Infrastructure", "Model Deployment (MLOps)", "AI Performance Optimization",
];

function Heading({ eyebrow, title, text, center = false }) {
  return <div className={`ai-heading${center ? " is-center" : ""}`}>{eyebrow ? <p>{eyebrow}</p> : null}<h2>{title}</h2>{text ? <div className="ai-heading-text">{text}</div> : null}</div>;
}

function ContactButton({ children = "Book a Call" }) {
  return <a href="/#contact" className="primary-button ai-button">{children}</a>;
}

export default function AiMachineLearningPage() {
  return <main className="ai-page">
    <section className="ai-hero"><div className="site-container ai-hero-grid"><div><Heading eyebrow="AI and Machine learning" title="AI Product Development" text={<><p>Artificial Intelligence should be embedded into products where it creates real business value.</p><p>From intelligent SaaS platforms to AI-enabled enterprise applications, we build end-to-end AI products that leverage machine learning, predictive analytics, natural language processing, and generative AI to deliver smarter user experiences and business outcomes.</p></>} /></div><img src={asset("raw-05.png")} alt="Artificial intelligence product development" /></div></section>

    <section className="ai-development"><div className="site-container"><Heading center title="Development Services" /><div className="ai-development-grid">{developmentServices.map((item, index) => <article key={item}><span>{index + 1}</span><h3>{item}</h3><img src={asset(`raw-${String(6 + (index % 8)).padStart(2, "0")}.png`)} alt="" /></article>)}</div></div></section>

    <section className="ai-conversation"><div className="site-container"><Heading eyebrow="Deliver Human-Like Conversations Across Every Channel." title="Conversational AI" text={<><p>Modern customers expect instant, intelligent, and personalized interactions.</p><p>We build conversational AI solutions powered by Large Language Models (LLMs) that enable businesses to automate customer engagement, streamline internal support, and provide accurate responses through websites, mobile apps, messaging platforms, and enterprise systems.</p></>} /><h3 className="ai-subheading">Solutions Include</h3><div className="ai-conversation-grid">{conversationSolutions.map(([title, icon]) => <article key={title}><img src={asset(icon)} alt="" /><p>{title}</p></article>)}</div></div></section>

    <section className="ai-process"><div className="site-container"><Heading center eyebrow="A Simple Process Designed for Speed and Quality" title="AI & Machine Learning" text="Leverage artificial intelligence to automate processes, unlock insights, and build intelligent solutions that accelerate business growth." /><div className="ai-process-grid"><div className="ai-process-list ai-process-list--left">{aiProcess.slice(0, 3).map((item, index) => <article key={item}><b>{index + 1}</b><span>{item}</span></article>)}</div><img src={asset("raw-05.png")} alt="AI and machine learning" /><div className="ai-process-list">{aiProcess.slice(3).map((item, index) => <article key={item}><b>{index + 4}</b><span>{item}</span></article>)}</div></div></div></section>

    <section className="ai-rag"><div className="site-container ai-rag-layout"><div><Heading eyebrow="Connect AI with Your Business Knowledge." title="RAG AI Development" text={<><p>Generic AI models don&apos;t understand your organization—Retrieval-Augmented Generation (RAG) changes that.</p><p>We develop RAG-based AI systems that securely retrieve information from your internal documents, knowledge bases, databases, and enterprise applications before generating accurate, context-aware responses. This enables AI assistants that understand your business rather than relying solely on public knowledge.</p></>} /></div><div className="ai-rag-cards">{ragCapabilities.map((item, index) => <article key={item}><b>{index + 1}</b><span>{item}</span></article>)}</div></div></section>

    <section className="ai-engineering"><div className="site-container ai-engineering-grid"><div><Heading eyebrow="Build the Foundation for Reliable AI Systems." title="Data & LLM Engineering" text={<><p>The quality of AI depends on the quality of its data and infrastructure.</p><p>We design scalable data pipelines, prepare enterprise datasets, optimize Large Language Models, and implement AI infrastructure that enables organizations to build secure, accurate, and production-ready AI applications. From data engineering to model deployment, we ensure your AI ecosystem is built for long-term success.</p></>} /></div><div><h3>Engineering Expertise</h3><div className="ai-engineering-cards">{engineering.map((item, index) => <article key={item}><img src={asset(`raw-${String(27 + (index % 8)).padStart(2, "0")}.svg`)} alt="" /><span>{item}</span></article>)}</div></div></div></section>

    <section className="ai-why"><div className="site-container"><Heading center eyebrow="Why us?" title="Why Byte Innovations?" text={<><p>Artificial Intelligence is no longer just an emerging technology—it&apos;s becoming a competitive necessity. At Byte Innovations, we combine AI expertise, data engineering, software development, and business consulting to deliver intelligent solutions that solve real-world challenges. Our focus is not on implementing AI for the sake of innovation, but on creating practical, scalable, and measurable business impact.</p><p>Whether you&apos;re building your first AI initiative, integrating AI into existing systems, or launching AI-native products, we help you innovate with confidence.</p></>} /><div className="ai-centered"><ContactButton /></div></div></section>

    <section className="ai-ready"><div className="site-container"><Heading center eyebrow="Contact us" title="Ready to Build Intelligent Solutions?" text={<><p>Whether you&apos;re exploring AI opportunities, developing custom AI agents, building AI-powered products, or modernizing your business with Large Language Models, Byte Innovations is ready to help you transform ideas into intelligent solutions that drive measurable results.</p><p><strong>Let&apos;s build the future of AI—together.</strong></p></>} /><div className="ai-centered"><ContactButton>Let&apos;s Build Together</ContactButton></div><div className="ai-collage"><div><img src={asset("raw-14.png")} alt="" /><img src={asset("raw-15.png")} alt="Byte Innovations developers" /></div><img src={asset("raw-16.png")} alt="Byte Innovations team" /><div><img src={asset("raw-17.png")} alt="Byte Innovations office" /><img src={asset("raw-14.png")} alt="" /></div></div></div></section>
  </main>;
}
