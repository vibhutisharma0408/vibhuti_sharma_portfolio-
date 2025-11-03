import { Github, ImageOff, Link as LinkIcon } from "lucide-react";
import { useMemo, useState } from "react";

// Put your shared screenshot into the public folder with this name
const BASE_PATH = import.meta.env.BASE_URL || "/";
const RAW_IMAGE_PATH = `${BASE_PATH}github-contributions.png`;
const GITHUB_USERNAME = "vibhutisharma0408"; // for profile link only

const GithubContributions = () => {
  const [failed, setFailed] = useState(false);
  const cacheBustedSrc = useMemo(() => `${RAW_IMAGE_PATH}?v=${Date.now()}`, []);
  return (
    <section id="github" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-muted-foreground">
            Snapshot of my recent GitHub activity
          </p>
        </div>

        <div className="portfolio-card p-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6 text-primary" />
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline"
              >
                @{GITHUB_USERNAME}
              </a>
            </div>
          </div>

          <div className="w-full overflow-auto rounded-lg border border-border bg-card">
            {!failed ? (
              <img
                src={cacheBustedSrc}
                alt="GitHub contribution calendar"
                className="w-full h-auto block"
                loading="eager"
                decoding="async"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="flex items-center gap-3 p-6 text-muted-foreground">
                <ImageOff className="w-5 h-5" />
                <span>
                  Image not found. Expected at
                  {" "}
                  <a href={RAW_IMAGE_PATH} className="underline" target="_blank" rel="noreferrer">
                    {RAW_IMAGE_PATH}
                  </a>.
                  Ensure the file exists at <code className="px-1 py-0.5 bg-muted rounded">public/github-contributions.png</code> and hard refresh.
                </span>
              </div>
            )}
          </div>

          {/* Small helper link to verify path */}
          <div className="mt-2 text-xs text-muted-foreground flex items-center gap-2">
            <LinkIcon className="w-3 h-3" />
            <a href={RAW_IMAGE_PATH} target="_blank" rel="noreferrer" className="underline">
              Open image directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
