import React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const RESUME_TEXT = `WASEEM ALI
 Email: Waseem38650@gmail.com | phone no: 03100071886

Motivated and passionate Data Science student with a strong foundation in programming, Python developer and web development, and data analysis. Seeking an internship opportunity to gain hands-on experience, contribute to real-world projects, and grow in a dynamic team environment.

Programming Languages: C++, Java, Python, MERN stack, PHP (Basic)
Web Development: HTML, CSS, Bootstrap, JavaScript, React, Node JS
Database: MySQL
Data Analysis & Visualization: Data preprocessing, Data Visualization, Experience working with NumPy, Pandas, and Matplotlib.
Additional Skills: API Developer and Integration, Basics of Digital Marketing
Soft Skills: Quick Learner, Team player, Communication

PROJECTS for Data Science
1. COVID-19 Data Analysis and Visualization
- Performed exploratory data analysis on global COVID-19 datasets to identify trends and hotspots.
- Created interactive dashboards using Tableau and Python (Matplotlib, Seaborn) to visualize case counts, recoveries, and fatalities over time.

2. Titanic Survival Prediction
- Developed a classification model to predict passenger survival using the Titanic dataset.
- Employed data cleaning, feature engineering, and algorithms like Logistic Regression and Random Forest with scikit-learn.

3. Heart Disease Prediction
- Built a machine learning model to predict the likelihood of heart disease from patient data.
- Used techniques such as data preprocessing, feature selection, and Support Vector Machine (SVM) for classification.

4. Medicine Effectiveness Analysis
- Analyzed clinical trial data to evaluate the effectiveness of various medicines.
- Conducted statistical analysis and visualized results using Pandas, NumPy, and Seaborn in Python.

5. Interactive Data Dashboard Development
- Created an interactive dashboard to present business insights and KPIs using Dash (Plotly) and Python.
- Enabled real-time filtering and data exploration to improve decision-making.

PROJECTS For Web Development & Python Developer
- Personal Portfolio Website: A modern and responsive personal portfolio website to showcase projects, skills, and experience with interactive design and smooth navigation. (https://waseemportfolioweb.netlify.app/)
- Coffee Shop Website: Designed a simple and responsive coffee shop website using HTML, CSS, and Bootstrap.
- Weather (Web App): Built a weather web application using HTML, CSS, and JavaScript.
- Text Generation API using Hugging Face & FastAPI: Developed and deployed a real-time text generation API using the Mistral-7B-Instruct LLM from Hugging Face. Integrated with FastAPI for endpoint creation and used ngrok to expose the service for external testing.
- TechHub Official Website: Developed an official website for TechHub, featuring a modern layout, interactive navigation, and responsive sections for services, projects, and contact details.
- Depression Prediction Website: Built a machine learning-based web app that predicts depression levels from user input data using Python, Flask, and ML algorithms.
- Paper Generator: A web-based application that automatically generates question papers using predefined templates and database-driven question sets.
- NFC Data Science Portal: Designed and developed a portal for Data Science students at NFC University, integrating course materials, project repositories, and event updates.

EDUCATION
Currently pursuing: BS in Data Science Aug 2023 - Ongoing
Institute: NFC Institute of Engineering and Fertilizer Research (NFC-IEFR), Faisalabad
Relevant Coursework: Programming, Machine Learning, Database, web development, Data Visualization
Languages: English, Urdu
Certifications: Master ChatGPT, Python, Digital Marketing, Mastering Microsoft PowerBI

Thanks for considering my application. I'm excited about the possibility of working together and contributing to your team.
`;

export default function About() {
  useScrollAnimation();

  // Utility: download a Blob with given filename
  function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // Try to fetch remote file and download if valid
  async function tryDownloadRemote(
    remotePath: string,
    filename: string,
    expectedContentTypes: string[] = [],
  ) {
    try {
      const res = await fetch(remotePath);
      if (!res.ok) return false;
      const contentType = (res.headers.get("content-type") || "").toLowerCase();
      if (
        expectedContentTypes.length &&
        !expectedContentTypes.some((t) => contentType.includes(t))
      ) {
        console.warn(
          "Remote file found but content-type mismatch:",
          contentType,
        );
        return false;
      }
      const blob = await res.blob();
      downloadBlob(blob, filename);
      return true;
    } catch (err) {
      console.warn("Error fetching remote file:", err);
      return false;
    }
  }

  // Download handlers for buttons
  async function handleDownloadPdf(e: React.MouseEvent) {
    e.preventDefault();
    // Strict: only download the original PDF file to preserve exact formatting
    const remotePdfPath = "/Waseem_Ali_CV.pdf";
    const got = await tryDownloadRemote(remotePdfPath, "Waseem_Ali_CV.pdf", [
      "pdf",
    ]);
    if (got) return;

    // If not available, inform the user and do not generate a fallback PDF to avoid formatting changes
    alert(
      "Original PDF not found on the server. Please upload your exact PDF file to the project's public/Waseem_Ali_CV.pdf so the download preserves formatting. No automatic PDF is generated to avoid formatting differences.",
    );
  }

  // Existing return continues below
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3" data-animate>
        {/* Left: Main content */}
        <div className="md:col-span-2">
          <div
            className="rounded-2xl border border-border p-6 sm:p-10 text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(6,8,11,0.55), rgba(6,8,11,0.55)), url('https://cdn.builder.io/api/v1/image/assets%2F121404fcb1684e55a4fdbb955d186e82%2F578b6203ccb44c1baefb0691e6df06b1?format=webp&width=1600')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="font-serif text-2xl sm:text-3xl text-primary">
              About Me &amp; My Journey
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">
              Waseem Ali — AI/ML · Data Science · Python Developer
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="font-semibold text-lg sm:text-xl text-primary">
                  Education &amp; Background
                </h2>
                <ul className="mt-3 text-sm text-white space-y-2">
                  <li>
                    <strong>BS Data Science</strong> — NFC Institute of
                    Engineering and Fertilizer Research (2023–2027)
                  </li>
                  <li>
                    <strong>Location:</strong> Pakistan
                  </li>
                  <li>
                    <strong>Started Coding Journey:</strong> 2022
                  </li>
                </ul>

                <h2 className="mt-6 font-semibold text-xl text-primary">
                  Specialization Focus
                </h2>
                <ul className="mt-3 text-sm text-white space-y-2">
                  <li>Machine Learning</li>
                  <li>Data Science</li>
                  <li>Python Development</li>
                  <li>AI Development</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-lg sm:text-xl text-primary">
                  AI / ML &amp; Data Science
                </h2>
                <p className="mt-3 text-sm text-white">
                  Passionate about creating intelligent systems that solve
                  real-world problems. My journey combines data science
                  foundations with cutting-edge AI/ML technologies and
                  development expertise.
                </p>

                <p className="mt-4 text-sm text-white">
                  Hands-on experience with data cleaning, exploratory analysis,
                  feature engineering, and building models for classification,
                  regression, and clustering tasks using Python, scikit-learn,
                  TensorFlow, and PyTorch.
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-primary">
                    Tools &amp; Libraries
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Pandas",
                      "NumPy",
                      "scikit-learn",
                      "TensorFlow",
                      "PyTorch",
                      "React",
                      "TailwindCSS",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <a
                href="/contact"
                className="inline-block w-full md:w-auto rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground text-center"
              >
                Contact
              </a>
              <a
                href="/projects"
                className="inline-block w-full md:w-auto rounded-md border border-border px-4 py-2 text-sm text-muted-foreground text-center"
              >
                View Projects
              </a>

              <button
                onClick={handleDownloadPdf}
                className="text-sm text-muted-foreground underline mt-2 md:mt-0"
              >
                Download PDF
              </button>
            </div>

            <div className="mt-6">
              <div
                className="w-full rounded-xl overflow-hidden mb-6"
                style={{
                  height: 160,
                  backgroundImage: `linear-gradient(rgba(6,8,11,0.45), rgba(6,8,11,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2F121404fcb1684e55a4fdbb955d186e82%2F578b6203ccb44c1baefb0691e6df06b1?format=webp&width=1600')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <h3 className="font-semibold text-lg text-primary">
                Resume Preview
              </h3>
              <div className="mt-3 max-h-48 md:max-h-64 overflow-auto rounded-md border border-border bg-background/70 p-4 text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">
                {RESUME_TEXT}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image card */}
        <aside className="md:col-span-1">
          <div
            className="md:sticky md:top-20 rounded-2xl border border-border p-4 sm:p-6 text-center mt-6 md:mt-0 text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(6,8,11,0.55), rgba(6,8,11,0.55)), url('https://cdn.builder.io/api/v1/image/assets%2F121404fcb1684e55a4fdbb955d186e82%2Faf5c9829f3734fbba114712f80b9187f?format=webp&width=1200')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2F97fd4de9a2aa476cba4e151aec9f3b32?format=webp&width=800"
              alt="Waseem Ali"
              className="mx-auto h-40 w-40 sm:h-48 sm:w-48 rounded-xl object-cover border-4 border-primary/20"
            />
            <h3 className="mt-4 text-base sm:text-lg font-semibold text-primary">
              Waseem Ali
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              BS Data Science • AI/ML Engineer
            </p>

            <div className="mt-4 grid gap-2">
              <div className="rounded-md bg-background/80 px-3 py-2 text-sm text-muted-foreground">
                Location: Pakistan
              </div>
              <div className="rounded-md bg-background/80 px-3 py-2 text-sm text-muted-foreground">
                Available: Remote
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/waseem-ali-2082002a6/"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/waseemali2826"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
