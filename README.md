<p align="center">
  <img src="public/logo.svg" alt="ReadRoll logo" width="120">
</p>

<h1 align="center">ReadRoll - Landing</h1>
<p align="center"><strong>Your books and board games, all in one place.</strong></p>

## Overview

ReadRoll helps you keep track of your collection of books and board games. You can see what you own, plan what you want next and keep everything organized without a spreadsheet.

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
