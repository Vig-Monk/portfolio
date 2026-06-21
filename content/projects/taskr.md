---
title: "Taskr"
slug: "taskr"
summary: "A MEVN-stack task management app, taken from course project to deployed portfolio piece."
categories: ["Full Stack"]
techStack: ["Vue 3", "Express", "MongoDB", "Node.js"]
architectureHighlights: ["MEVN stack", "Deployed on Render & Vercel"]
githubUrl: "https://github.com/Vig-Monk/express-api-fundamentals"
demoUrl: ""
featured: false
order: 3
---

## Overview

Taskr is a task management application built on the MEVN stack (MongoDB,
Express, Vue 3, Node.js). It started as a structured course project and was
taken further — deployed and polished into a genuine portfolio piece rather
than left as a tutorial exercise.

## Problem

Most course projects stop at "it runs locally." The goal with Taskr was to
push past that: a real deployed app, with the API on Render and the frontend
on Vercel, talking to each other in production rather than just on localhost.

## Solution

A standard MEVN task manager — create, update, complete, and organize
tasks — used deliberately as a vehicle for learning fullstack fundamentals
end-to-end, from API design through to a live deployment.

## Architecture

A straightforward REST API over Express and MongoDB, paired with a Vue 3
frontend. The interesting part wasn't novel architecture — it was closing
the loop on deployment: environment variables, CORS, build configuration,
and the small mismatches between local and production environments that
only show up once you actually ship.

## Lessons Learned

This project marked the shift from "tutorial-following" to "fullstack
fundamentals I actually understand." The deployment process in particular —
getting a separately-hosted frontend and backend to work together in
production — was where most of the real learning happened, more so than the
CRUD logic itself.

## Stack

Vue 3 · Express · MongoDB · Node.js · Render · Vercel

GitHub: [express-api-fundamentals](https://github.com/Vig-Monk/express-api-fundamentals)