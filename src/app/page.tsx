"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Portfolio",
          id: "metrics",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Bayside Sourcing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Bayside Sourcing"
      description="Your premier partner for efficient, compliant, and transparent government contracting and sourcing solutions."
      buttons={[
        {
          text: "Explore Services",
          href: "#features",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=er28fq",
          imageAlt: "Modern Government Facilities",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s9ivec",
          imageAlt: "Digital Network Connectivity",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=thc0u8",
          imageAlt: "Professional Procurement Success",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=uhuoje",
          imageAlt: "Valid Contracting Services",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xn5jlb",
          imageAlt: "Industrial Distribution Reach",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ppa4a2",
          imageAlt: "Secure Partnership Innovation",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Unmatched Expertise in Sourcing"
      description="Bayside Sourcing specializes in navigating the complexities of government procurement. We bridge the gap between supply chain excellence and rigorous government standards."
      metrics={[
        {
          value: "20+",
          title: "Years Experience",
        },
        {
          value: "150+",
          title: "Successful Contracts",
        },
        {
          value: "99.9%",
          title: "Compliance Rate",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=eaknvg"
      imageAlt="Our expert team"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Shield,
          title: "Compliant Sourcing",
          description: "Ensure full regulatory adherence with our audited sourcing processes.",
        },
        {
          icon: Zap,
          title: "Rapid Procurement",
          description: "Accelerate project timelines through our streamlined, agile sourcing workflows.",
        },
        {
          icon: Award,
          title: "Contract Management",
          description: "Expert oversight from contract initiation through final delivery.",
        },
      ]}
      title="Comprehensive Solutions"
      description="We deliver high-impact services designed to optimize sourcing and ensure success at every stage of the contracting process."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "$500M+",
          title: "Total Procurement Volume",
          items: [
            "Government projects",
            "Public works",
            "Supply chain efficiency",
          ],
        },
        {
          id: "m2",
          value: "40+",
          title: "Strategic Partners",
          items: [
            "Key vendors",
            "Technical suppliers",
            "Logistics providers",
          ],
        },
        {
          id: "m3",
          value: "12",
          title: "Federal Agencies Served",
          items: [
            "Department of Defense",
            "Energy sectors",
            "Public infrastructure",
          ],
        },
      ]}
      title="Proven Performance"
      description="Bayside Sourcing's impact across government and institutional sectors."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Global Tech Solutions",
        "Logistics Dynamics",
        "Green Earth Energy",
        "Aerospace Systems Corp",
        "Modern Build Group",
        "Secure Financial Data",
        "Defense Manufacturers Group",
      ]}
      title="Trusted by Leaders"
      description="We are honored to support the missions of top-tier partners across the country."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          handle: "@SJohnson",
          testimonial: "Bayside Sourcing turned around our supply chain operations in record time. Their compliance knowledge is unparalleled.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4bq3wh",
        },
        {
          id: "t2",
          name: "Michael Chen",
          handle: "@MChenArch",
          testimonial: "Consistently reliable and highly professional. Bayside simplifies the most complex procurement requirements.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a32909",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          handle: "@ERodriguez",
          testimonial: "Their proactive approach to risk management allowed us to focus on our primary mission without worry.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wnvg0b",
        },
        {
          id: "t4",
          name: "David Kim",
          handle: "@DKimLeaders",
          testimonial: "Exceeded all performance metrics. A vital partner in our federal project portfolio.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ffo4el",
        },
        {
          id: "t5",
          name: "Jane Smith",
          handle: "@JSmithMgr",
          testimonial: "Exceptional efficiency and clear, transparent reporting at every turn.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jlkbph",
        },
      ]}
      title="What Partners Say"
      description="Hear directly from those who trust our sourcing expertise."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do we ensure contract compliance?",
          content: "Our team employs a multi-step audit process for all procurement stages to guarantee compliance with all relevant government regulations.",
        },
        {
          id: "q2",
          title: "Which industries do you serve?",
          content: "We support a wide array of government sectors including defense, infrastructure, public utilities, and logistical operations.",
        },
        {
          id: "q3",
          title: "What is the typical project timeline?",
          content: "Timelines vary by project scale; however, we pride ourselves on agile workflows that significantly optimize standard government procurement cycles.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Clear answers to help you understand our engagement process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Partner?"
      description="Reach out to discuss your specific government sourcing needs. We are here to help."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist you?",
        rows: 4,
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cp5fny"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Bayside Sourcing"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
