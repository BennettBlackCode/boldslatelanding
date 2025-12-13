'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle2, Zap, Clock, Users, BarChart3, Globe, MapPin, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { motion } from 'motion/react';
import { trackEvent } from './FacebookPixel';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Interactive Dashboard Component
function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState('workflows');

  const stats = [
    { label: 'Hours Saved', value: '2,847', icon: Clock, color: 'text-emerald-600', trend: 'Last 30 days' },
    { label: 'Tasks Automated', value: '1.4k', icon: BarChart3, color: 'text-purple-600', trend: 'Last 30 days' },
    { label: 'Money Saved', value: '$24,821', icon: Zap, color: 'text-amber-600', trend: 'Last 30 days' },
  ];

  const workflows = [
    { name: 'Onboarding System', status: 'active', metric: '36 clients added this month', icon: Users, description: 'Automatically onboards new clients with welcome sequences, account setup, and team introductions.' },
    { name: 'Reporting System', status: 'active', metric: '936 emails sent this month', icon: FileText, description: 'Generates and sends automated performance reports to clients on a scheduled basis.' },
    { name: 'Website Generation', status: 'active', metric: '44 sites built this month', icon: Globe, description: 'AI-powered website builder that creates custom sites for clients in minutes.' },
    { name: 'Local SEO System', status: 'active', metric: '447 tasks completed this month', icon: MapPin, description: 'Manages citations, reviews, and local listings across all platforms automatically.' },
  ];

  const recentActivity = [
    { action: 'New client onboarded', time: '2 min ago', type: 'success' },
    { action: 'Weekly report sent', time: '15 min ago', type: 'success' },
    { action: 'Website built & deployed', time: '28 min ago', type: 'success' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#010100]/10 shadow-2xl shadow-[#010100]/10 overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-[#FAF8F7] border-b border-[#010100]/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2 text-sm text-[#545555]">
          <span className="px-3 py-1 bg-white rounded-md border border-[#010100]/10">app.youragencyurl.com</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#010100] to-[#545555] flex items-center justify-center">
            <span className="text-white text-xs font-bold">AA</span>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-[#FAF8F7] rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-xs text-emerald-600 font-medium">{stat.trend}</span>
              </div>
              <div className="text-2xl font-semibold text-[#010100]">{stat.value}</div>
              <div className="text-xs text-[#545555]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {['workflows', 'activity', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#010100] text-white'
                  : 'bg-[#FAF8F7] text-[#545555] hover:bg-[#010100]/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Content - Changes based on active tab */}
          <div className="lg:col-span-2 space-y-3">
            {activeTab === 'workflows' && workflows.map((workflow, index) => (
              <motion.div
                key={workflow.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-[#FAF8F7] rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-white border-[#010100]/10">
                      <workflow.icon className="w-5 h-5 text-[#010100]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#010100]">{workflow.name}</div>
                      <div className="text-xs text-[#545555]">{workflow.metric}</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs bg-emerald-100 text-emerald-700">
                    {workflow.status}
                  </span>
                </div>
              </motion.div>
            ))}

            {activeTab === 'activity' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {[
                  { action: 'New client onboarded', detail: 'Hometown Plumbing added to system', time: '2 min ago', icon: Users },
                  { action: 'Weekly report sent', detail: 'Sent to 12 clients automatically', time: '15 min ago', icon: FileText },
                  { action: 'Website built & deployed', detail: 'Johnson Plumbing - 47 pages', time: '28 min ago', icon: Globe },
                  { action: 'Local SEO task completed', detail: 'Updated 23 citations for client', time: '45 min ago', icon: MapPin },
                  { action: 'Report generated', detail: 'Monthly performance summary', time: '1 hour ago', icon: BarChart3 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-[#FAF8F7] rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#010100]/10">
                      <item.icon className="w-5 h-5 text-[#010100]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[#010100]">{item.action}</div>
                      <div className="text-xs text-[#545555]">{item.detail}</div>
                    </div>
                    <div className="text-xs text-[#545555]">{item.time}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'reports' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {[
                  { name: 'Weekly Performance Report', status: 'Sent', date: 'Dec 12, 2024', recipients: 12 },
                  { name: 'Monthly Analytics Summary', status: 'Scheduled', date: 'Dec 15, 2024', recipients: 8 },
                  { name: 'Client ROI Report', status: 'Draft', date: 'Dec 18, 2024', recipients: 5 },
                ].map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-[#FAF8F7] rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#010100]/10">
                        <FileText className="w-5 h-5 text-[#010100]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#010100]">{report.name}</div>
                        <div className="text-xs text-[#545555]">{report.recipients} recipients • {report.date}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      report.status === 'Sent' ? 'bg-emerald-100 text-emerald-700' :
                      report.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {report.status}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Activity Feed Sidebar - Hidden on mobile */}
          <div className="hidden lg:block space-y-3">
            <div className="text-sm font-medium text-[#010100] mb-2">Recent Activity</div>
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="flex items-start gap-3 p-3 bg-[#FAF8F7] rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-[#010100]">{activity.action}</div>
                  <div className="text-xs text-[#545555]">{activity.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none isolate opacity-40"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(30,10%,95%,.4)_0,hsla(30,10%,85%,.1)_50%,transparent_80%)]" />
        <div className="h-[80rem] absolute right-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(30,10%,95%,.3)_0,hsla(30,10%,85%,.1)_80%,transparent_100%)] [translate:-5%_-50%]" />
      </div>

      <div className="relative pt-24 md:pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              {/* Social Proof Badge */}
              <div className="mb-8 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-4">
                  <AvatarCircles
                    avatarUrls={[
                      "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/lane%20image.png",
                      "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/vince%20image.png",
                      "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/frankie%20image.png",
                      "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Ibrahim%20Barhumi.png",
                      "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Social%20Proof/Jeremy%20Friedland/Jeremy%20Friedland%20Profile%20Pic%20-%20AutomatePro.jpg",
                    ]}
                    numPeople={99}
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-[#010100]">
                      <span className="text-lg">★★★★★</span>
                    </div>
                    <p className="text-sm font-medium text-[#545555]">30+ Agencies Served</p>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-[42px] md:text-[52px] lg:text-[60px] leading-[1.05] font-semibold text-[#010100] max-w-4xl mx-auto">
                Save your agency thousands of<br />
                hours of human time
              </h1>

              {/* Subheading */}
              <p className="mx-auto mt-8 max-w-2xl text-[20px] md:text-[24px] leading-[1.6] text-[#545555] font-light">
                We build AI powered systems for small to medium sized marketing agencies that automate key processes to help you scale.
              </p>
            </AnimatedGroup>

            {/* CTA Buttons */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <div className="bg-[#010100]/10 rounded-[14px] p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-8 py-6 text-lg font-medium"
                >
                  <Link 
                    href="https://cal.com/boldslate/ai-systems-consultation"
                    onClick={() => trackEvent('Schedule', { content_name: 'Hero CTA Primary' })}
                  >
                    <span className="text-nowrap">Book A Free Discovery Call</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              {/* See Results button - commented out for now
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-6 py-6 text-lg"
              >
                <Link 
                  href="#outcomes"
                  onClick={() => trackEvent('ViewContent', { content_name: 'Hero See Results' })}
                >
                  <Play className="mr-2 w-5 h-5" />
                  <span className="text-nowrap">See The Results</span>
                </Link>
              </Button>
              */}
            </AnimatedGroup>
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative mt-16 overflow-hidden px-4 sm:px-6 md:mt-20">
            <div
              aria-hidden
              className="bg-gradient-to-b to-white absolute inset-0 z-10 from-transparent from-50% pointer-events-none"
            />
            <div className="relative mx-auto max-w-6xl">
              <InteractiveDashboard />
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

