// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in top-tier conferences and journals, grouped by year in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects on AI-driven solutions for time series, predictive maintenance, and domain adaptation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Mohamed Ragab&#39;s academic curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-amp-mentoring",
          title: "Teaching &amp; Mentoring",
          description: "Teaching, guest lectures, and student supervision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-joined-as-phd-student-at-ntu-singapore-with-singa-scholarship",
          title: 'Joined as PhD Student at NTU Singapore with SINGA Scholarship.',
          description: "",
          section: "News",},{id: "news-paper-won-finalist-paper-award-at-ieee-icphm-2020",
          title: 'Paper won Finalist Paper Award at IEEE ICPHM 2020.',
          description: "",
          section: "News",},{id: "news-paper-contrastive-adversarial-domain-adaptation-for-machine-rul-prediction-accepted-in-ieee-tii",
          title: 'Paper “Contrastive Adversarial Domain Adaptation for Machine RUL Prediction” accepted in IEEE TII....',
          description: "",
          section: "News",},{id: "news-paper-conditional-contrastive-domain-generalization-for-fault-diagnosis-accepted-in-ieee-tim",
          title: 'Paper “Conditional Contrastive Domain Generalization for Fault Diagnosis” accepted in IEEE TIM.',
          description: "",
          section: "News",},{id: "news-paper-time-series-representation-learning-via-temporal-and-contextual-contrasting-accepted-at-ijcai-2021",
          title: 'Paper “Time-Series Representation Learning via Temporal and Contextual Contrasting” accepted at IJCAI 2021....',
          description: "",
          section: "News",},{id: "news-started-as-scientist-at-a-star-cfar-and-i2r",
          title: 'Started as Scientist at A*STAR CFAR and I2R.',
          description: "",
          section: "News",},{id: "news-paper-domain-generalization-via-selective-consistency-regularization-accepted-at-icpr-2022",
          title: 'Paper “Domain Generalization via Selective Consistency Regularization” accepted at ICPR 2022.',
          description: "",
          section: "News",},{id: "news-paper-self-supervised-autoregressive-domain-adaptation-accepted-in-ieee-tnnls",
          title: 'Paper “Self-supervised Autoregressive Domain Adaptation” accepted in IEEE TNNLS.',
          description: "",
          section: "News",},{id: "news-paper-adast-attentive-cross-domain-eeg-based-sleep-staging-accepted-in-ieee-tetci",
          title: 'Paper “ADAST: Attentive Cross-domain EEG-based Sleep Staging” accepted in IEEE TETCI.',
          description: "",
          section: "News",},{id: "news-paper-diverse-and-consistent-multi-view-networks-for-semi-supervised-regression-accepted-at-ecml-pkdd",
          title: 'Paper “Diverse and Consistent Multi-view Networks for Semi-supervised Regression” accepted at ECML PKDD....',
          description: "",
          section: "News",},{id: "news-paper-self-supervised-learning-for-label-efficient-sleep-stage-classification-accepted-in-ieee-tnsre",
          title: 'Paper “Self-supervised Learning for Label-Efficient Sleep Stage Classification” accepted in IEEE TNSRE.',
          description: "",
          section: "News",},{id: "news-paper-adatime-a-benchmarking-suite-for-domain-adaptation-on-time-series-data-accepted-in-acm-tkdd",
          title: 'Paper “AdaTime: A Benchmarking Suite for Domain Adaptation on Time Series Data” accepted...',
          description: "",
          section: "News",},{id: "news-paper-source-free-domain-adaptation-with-temporal-imputation-for-time-series-data-accepted-at-kdd-2023",
          title: 'Paper “Source-Free Domain Adaptation with Temporal Imputation for Time Series Data” accepted at...',
          description: "",
          section: "News",},{id: "news-paper-contrastive-domain-adaptation-for-time-series-via-temporal-mixup-accepted-in-ieee-tai",
          title: 'Paper “Contrastive Domain Adaptation for Time-Series via Temporal Mixup” accepted in IEEE TAI....',
          description: "",
          section: "News",},{id: "news-paper-self-supervised-contrastive-representation-learning-for-semi-supervised-time-series-classification-accepted-in-ieee-tpami",
          title: 'Paper “Self-supervised Contrastive Representation Learning for Semi-supervised Time-Series Classification” accepted in IEEE TPAMI....',
          description: "",
          section: "News",},{id: "news-awarded-a-star-career-development-fund-cdf-for-label-efficient-and-resilient-federated-learning-sgd-150k",
          title: 'Awarded A*STAR Career Development Fund (CDF) for “Label-Efficient and Resilient Federated Learning” (SGD...',
          description: "",
          section: "News",},{id: "news-paper-tslanet-rethinking-transformers-for-time-series-representation-learning-accepted-at-icml-2024",
          title: 'Paper “TSLANet: Rethinking Transformers for Time Series Representation Learning” accepted at ICML 2024....',
          description: "",
          section: "News",},{id: "news-joined-tii-propulsion-amp-amp-space-as-researcher-in-abu-dhabi-uae",
          title: 'Joined TII Propulsion &amp;amp;amp; Space as Researcher in Abu Dhabi, UAE.',
          description: "",
          section: "News",},{id: "news-survey-label-efficient-time-series-representation-learning-a-review-accepted-in-ieee-tai",
          title: 'Survey “Label-Efficient Time Series Representation Learning: A Review” accepted in IEEE TAI.',
          description: "",
          section: "News",},{id: "news-paper-virtual-label-based-hierarchical-domain-adaptation-for-time-series-classification-accepted-in-ieee-tnnls",
          title: 'Paper “Virtual-Label-Based Hierarchical Domain Adaptation for Time-Series Classification” accepted in IEEE TNNLS.',
          description: "",
          section: "News",},{id: "news-paper-overcoming-negative-transfer-by-online-selection-distant-domain-adaptation-for-fault-diagnosis-accepted-in-ieee-tim",
          title: 'Paper “Overcoming Negative Transfer by Online Selection: Distant Domain Adaptation for Fault Diagnosis”...',
          description: "",
          section: "News",},{id: "news-paper-augmented-contrastive-clustering-with-uncertainty-aware-prototyping-for-time-series-test-time-adaptation-accepted-at-kdd-2025",
          title: 'Paper “Augmented Contrastive Clustering with Uncertainty-Aware Prototyping for Time Series Test Time Adaptation”...',
          description: "",
          section: "News",},{id: "news-paper-from-inconsistency-to-unity-benchmarking-deep-learning-based-uda-for-rul-accepted-in-ieee-tase",
          title: 'Paper “From Inconsistency to Unity: Benchmarking Deep Learning-Based UDA for RUL” accepted in...',
          description: "",
          section: "News",},{id: "news-paper-everadapt-continuous-adaptation-for-dynamic-machine-fault-diagnosis-environments-accepted-in-mssp",
          title: 'Paper “EverAdapt: Continuous Adaptation for Dynamic Machine Fault Diagnosis Environments” accepted in MSSP....',
          description: "",
          section: "News",},{id: "news-paper-evidential-domain-adaptation-for-remaining-useful-life-prediction-with-incomplete-degradation-accepted-in-ieee-tim",
          title: 'Paper “Evidential Domain Adaptation for Remaining Useful Life Prediction with Incomplete Degradation” accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-boosting-time-series-domain-adaptation-via-a-time-frequency-consensus-framework-has-been-accepted-novel-consensus-based-strategy-integrating-time-and-frequency-domain-representations",
          title: 'Our paper “Boosting Time-series Domain Adaptation via A Time-Frequency Consensus Framework” has been...',
          description: "",
          section: "News",},{id: "news-promoted-to-senior-researcher-at-tii-propulsion-amp-amp-space-research-center",
          title: 'Promoted to Senior Researcher at TII Propulsion &amp;amp;amp; Space Research Center.',
          description: "",
          section: "News",},{id: "news-won-best-paper-award-at-ccia-2025",
          title: 'Won Best Paper Award at CCIA 2025.',
          description: "",
          section: "News",},{id: "projects-ai-driven-predictive-maintenance-for-jet-engines",
          title: 'AI-Driven Predictive Maintenance for Jet Engines',
          description: "AI solutions for prognostics and health management of jet engines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_jet_engine_phm/";
            },},{id: "projects-contrastive-learning-for-time-series-domain-adaptation",
          title: 'Contrastive Learning for Time Series Domain Adaptation',
          description: "Leveraging contrastive learning to address domain shift in time series",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_contrastive_da/";
            },},{id: "projects-learning-with-less-data",
          title: 'Learning with Less Data',
          description: "Addressing scarcity of labeled data in time series applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_less_data/";
            },},{id: "projects-explainable-ai-for-multimodal-predictive-maintenance",
          title: 'Explainable AI for Multimodal Predictive Maintenance',
          description: "Explainable AI for multimodal predictive maintenance of jet engines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_xai_phm/";
            },},{id: "projects-continual-and-privacy-preserving-ai",
          title: 'Continual and Privacy-Preserving AI',
          description: "Sustainable and privacy-preserving AI for time series applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_continual_privacy/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Mohamed_Ragab.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6F%68%61%6D%65%64.%72%61%67%61%62@%74%69%69.%61%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nNeT_NUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohamedr002", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohamedragab1", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
