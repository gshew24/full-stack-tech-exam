# Full Stack Tech Exam

**Name:** Griffin Shewbart

---

## Required Links

| Component               | Link                                                        |
| ----------------------- | ----------------------------------------------------------- |
| GitHub Repository       | https://github.com/gshew24/full-stack-tech-exam             |
| GitHub Pages (docs/)    | https://gshew24.github.io/full-stack-tech-exam/             |
| Dev Server (Render)     | https://full-stack-tech-exam/dev.onrender.com               |
| Production Server (GCP) | http://8.228.21.67:3000                                     |
| Issue                   | https://github.com/gshew24/full-stack-tech-exam/issues/1    |
| Pull Request            | https://github.com/gshew24/full-stack-tech-exam/pull/2      |
| Milestone               | https://github.com/gshew24/full-stack-tech-exam/milestone/1 |
| Successful CI/CD Action | https://github.com/gshew24/full-stack-tech-exam/actions     |

---

## SSH Command to GCP

```bash
ssh -i student-key bcumbie@8.228.21.67
```

---

## Project Overview

This project configures and deploys a full stack Node.js application using GitHub, GitHub Pages, MongoDB, and a Google Cloud Platform Compute Engine VM.

The application serves a frontend page that allows a user to submit a username. The request is sent to the server using JavaScript `fetch()` and the server responds with the associated emoji stored in MongoDB.

---

## Features Implemented

* Node.js Express server
* Static frontend served from the `public` directory
* Frontend form converted to a JavaScript `fetch()` request
* Username input sent to backend API endpoint
* Response displayed dynamically in the DOM
* MongoDB integration using environment variables
* Deployment on a GCP VM instance

---

**Exam submission complete**
