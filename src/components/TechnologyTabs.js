"use client";

import { useId, useState } from "react";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const technologyGroups = [
  {
    name: "Web",
    tools: [
      ["JavaScript", "javascript/javascript-original.svg"],
      ["TypeScript", "typescript/typescript-original.svg"],
      ["HTML5", "html5/html5-original.svg"],
      ["CSS3", "css3/css3-original.svg"],
      ["Node.js", "nodejs/nodejs-original.svg"],
      ["React", "react/react-original.svg"],
      ["Vue.js", "vuejs/vuejs-original.svg"],
      ["Angular", "angularjs/angularjs-original.svg"],
      ["Next.js", "nextjs/nextjs-original.svg"],
      ["Express", "express/express-original.svg"],
    ],
  },
  {
    name: "Mobile",
    tools: [
      ["Flutter", "flutter/flutter-original.svg"],
      ["React Native", "react/react-original.svg"],
      ["Android", "android/android-original.svg"],
      ["iOS", "apple/apple-original.svg"],
      ["Expo", "expo/expo-original.svg"],
      ["Kotlin", "kotlin/kotlin-original.svg"],
      ["Swift", "swift/swift-original.svg"],
      ["Ionic", "ionic/ionic-original.svg"],
      ["Capacitor", "capacitor/capacitor-original.svg"],
      ["Xamarin", "xamarin/xamarin-original.svg"],
    ],
  },
  {
    name: "Data",
    tools: [
      ["Django", "django/django-plain.svg"],
      ["Laravel", "laravel/laravel-original.svg"],
      ["FastAPI", "fastapi/fastapi-original.svg"],
      ["PostgreSQL", "postgresql/postgresql-original.svg"],
      ["MongoDB", "mongodb/mongodb-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
      ["Redis", "redis/redis-original.svg"],
      ["GraphQL", "graphql/graphql-plain.svg"],
      ["Firebase", "firebase/firebase-plain.svg"],
      ["Supabase", "supabase/supabase-original.svg"],
    ],
  },
  {
    name: "Enterprise",
    tools: [
      [".NET", "dotnetcore/dotnetcore-original.svg"],
      ["Spring Boot", "spring/spring-original.svg"],
      ["Python", "python/python-original.svg"],
      ["Go", "go/go-original-wordmark.svg"],
      ["AWS", "amazonwebservices/amazonwebservices-original-wordmark.svg"],
      ["Java", "java/java-original.svg"],
      ["Ruby on Rails", "rails/rails-original-wordmark.svg"],
      ["Azure", "azure/azure-original.svg"],
      ["Docker", "docker/docker-original.svg"],
      ["Kubernetes", "kubernetes/kubernetes-original.svg"],
    ],
  },
];

export default function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabId = useId();
  const activeGroup = technologyGroups[activeTab];

  return (
    <div className="technology-tabs">
      <div className="technology-tab-list" role="tablist" aria-label="Technology categories">
        {technologyGroups.map((group, index) => (
          <button
            type="button"
            role="tab"
            id={`${tabId}-tab-${index}`}
            aria-controls={`${tabId}-panel-${index}`}
            aria-selected={activeTab === index}
            className={`technology-tab${activeTab === index ? " is-active" : ""}`}
            key={group.name}
            onClick={() => setActiveTab(index)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div
        className="technology-panel"
        role="tabpanel"
        id={`${tabId}-panel-${activeTab}`}
        aria-labelledby={`${tabId}-tab-${activeTab}`}
      >
        {activeGroup.tools.map(([name, icon]) => (
          <article className="technology-card" key={name}>
            <img src={`${iconBase}/${icon}`} alt="" width={48} height={48} />
            <span>{name}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
