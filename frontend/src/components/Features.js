import React from "react";
import iconMoney from "../img/icon-money.png";
import iconSecurity from "../img/icon-security.png";
import iconChat from "../img/icon-chat.png";
import FeatureItem from "./FeatureItem";

const Features = () => {
  const featureItems = [
    {
      icon: iconChat,
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      icon: iconMoney,
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureItems.map((item, index) => (
          <FeatureItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Features;
