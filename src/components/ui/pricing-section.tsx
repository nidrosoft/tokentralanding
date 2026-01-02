"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/base/badges/badges"
import { Button } from "@/components/base/buttons/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    title: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Up to $1,000/month AI spend",
    features: [
      "1 AI provider",
      "Basic dashboard",
      "7-day data retention",
      "Email alerts",
      "Community support",
    ],
    ctaText: "Get Started",
    ctaHref: "https://app.tokentra.io",
    isFeatured: false,
  },
  {
    title: "Starter",
    price: { monthly: 99, yearly: 950 },
    description: "$1,000 - $5,000/month AI spend",
    features: [
      "5 AI providers",
      "Full dashboard & analytics",
      "30-day data retention",
      "SDK access (Node.js, Python)",
      "Cost attribution",
      "Slack alerts",
      "CSV export",
    ],
    ctaText: "Get Started",
    ctaHref: "https://app.tokentra.io",
    isFeatured: false,
  },
  {
    title: "Pro",
    price: { monthly: 299, yearly: 2870 },
    description: "$5,000 - $30,000/month AI spend",
    features: [
      "Unlimited providers",
      "90-day data retention",
      "Smart model routing",
      "Semantic caching",
      "Optimization recommendations",
      "Budget controls",
      "API access",
      "Priority email support",
    ],
    ctaText: "Get Started",
    ctaHref: "https://app.tokentra.io",
    isFeatured: true,
  },
  {
    title: "Business",
    price: { monthly: 899, yearly: 8630 },
    description: "$30,000+/month AI spend",
    features: [
      "1-year data retention",
      "Advanced anomaly detection",
      "Custom integrations",
      "Dedicated Slack channel",
      "Onboarding assistance",
      "99.9% SLA",
      "Priority support",
    ],
    ctaText: "Get Started",
    ctaHref: "https://app.tokentra.io",
    isFeatured: false,
  },
]

const AnimatedDigit: React.FC<{ digit: string; index: number }> = ({ digit, index }) => {
  return (
    <div className="relative overflow-hidden inline-block min-w-[1ch] text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.05,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const ScrollingNumber: React.FC<{ value: number }> = ({ value }) => {
  const numberString = value.toString()
  
  return (
    <div className="flex items-center">
      {numberString.split('').map((digit, index) => (
        <AnimatedDigit 
          key={`${value}-${index}`}
          digit={digit}
          index={index}
        />
      ))}
    </div>
  )
}

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  return (
    <section id="pricing" className="bg-primary py-16 md:py-24">
      <div className="mx-auto w-full max-w-container px-4 md:px-8">
        <motion.div 
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <Badge color="gray" type="pill-color" size="md">
              Pricing
            </Badge>
            <motion.h2 
              className="text-display-sm font-semibold text-primary md:text-display-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              className="text-lg text-tertiary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pay based on your AI spend under management. Start free, scale as you grow. Cancel anytime.
            </motion.p>
          </div>

          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Tabs 
              value={isYearly ? "yearly" : "monthly"} 
              onValueChange={(value) => setIsYearly(value === "yearly")}
            >
              <TabsList className="flex w-full h-12 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <TabsTrigger value="monthly" className="text-base font-medium cursor-pointer flex-1 px-6 rounded-md data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all">Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="text-base font-medium flex items-center gap-2 cursor-pointer flex-1 px-6 rounded-md data-[state=active]:bg-purple-600 data-[state=active]:text-white transition-all">
                  Yearly
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-medium">
                    Save 20%
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              variants={cardVariants}
              className="relative"
            >
              {plan.isFeatured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                    <Star className="size-3 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`
                relative h-full p-6 rounded-xl border-2 transition-all duration-300 flex flex-col
                ${plan.isFeatured 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 dark:border-purple-400 shadow-lg' 
                  : 'border-secondary bg-primary shadow-xs'
                }
              `}>
                <div className="text-center space-y-3 mb-6">
                  <h3 className="text-xl font-bold text-primary">{plan.title}</h3>
                  <p className="text-sm text-tertiary">{plan.description}</p>
                  
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary flex items-center justify-center">
                      $<ScrollingNumber value={isYearly ? Math.round(plan.price.yearly / 12) : plan.price.monthly} />
                      <span className="text-base text-tertiary font-normal ml-1">
                        /month
                      </span>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-tertiary flex items-center justify-center gap-2"
                    >
                      <span>{isYearly ? `billed yearly` : `billed monthly`}</span>
                      {isYearly && plan.price.monthly > 0 && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium"
                        >
                          Save ${(plan.price.monthly * 12) - plan.price.yearly}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.03 }}
                      className="flex items-start gap-2"
                    >
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <Check className="size-4 text-purple-600" />
                      </div>
                      <span className="text-sm text-primary">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="mt-6"
                >
                  <a 
                    href={plan.ctaHref}
                    className={`inline-flex items-center justify-center w-full px-4 py-3 text-md font-semibold rounded-lg transition-all duration-300 ${
                      plan.isFeatured 
                        ? 'text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 shadow-md hover:shadow-lg' 
                        : 'text-primary bg-secondary hover:bg-secondary_hover border border-secondary'
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-tertiary mb-4">
            Need higher limits? Managing $30K+ in AI spend?
          </p>
          <p className="text-sm text-tertiary mb-6">
            Enterprise plans available with custom pricing, unlimited retention, SAML SSO, audit logs, and dedicated support.
          </p>
          <a href="mailto:hello@tokentra.io">
            <Button size="lg" color="secondary">
              Contact Sales
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
