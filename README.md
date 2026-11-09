<p align="center">
  <img src="public/logo.svg" alt="ReadRoll logo" width="120">
</p>

<h1 align="center">ReadRoll - Landing</h1>
<p align="center"><strong>Read it. Play it. Track it. For readers and players.</strong></p>

## Overview

ReadRoll keeps your books and board games organized. Know what’s on your shelves, plan your next favorite, and say goodbye to spreadsheets.

Static site, live at https://readroll.xyz

## Stack

- Astro 7
- Tailwind
- pnpm
- Docker

## Prerequisites

- Node.js
- pnpm
- Docker (optional)

## Setup (Local)

- Clone the repository
- Run `pnpm install`
- Run `pnpm dev`
- Landing: http://localhost:4321/

## Build

- Run `pnpm build`
- The static site is generated in `dist/`

## Docker

- Run `docker build -t readroll-landing .`
- Run `docker run -d -p 8080:8080 readroll-landing`
- Landing: http://localhost:8080/
