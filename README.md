# DaisyShip - The BEST Astro + Tailwind Template

# 🪄 Setup

**🚀 [Click here to use this template](https://github.com/JBowen99/daisyShip/generate)**

To get up and running, first create a new Astro project with the template:

`npm create astro@latest -- --template JBowen99/daisyShip`

After the projects is created, install dependencies:

`cd DaisyShip`

`npm install`

To run the project:

`npm run dev`

Congrats! You're all setup and ready to start making your website!

---

# 🪜Project Layout

Quick reference for the project layout

```
/
├── public/
│   └── favicon.ico and other public files should go here
├── src/
|   ├── assets/
|   |   └── Assets you want optimized go here
│   ├── components/
│   │   └── Individual components and widgets
│   ├── icons/
│   │   └── Local directory for the Iconify [Astro Component] (https://github.com/natemoo-re/astro-icon)
│   └── layouts/
│   |   └── The main PageLayout.astro is here
│   └── pages/
│   |   └── Each page is stored here as an astro file
│   └── pages/
│       └── Each page is stored here as an astro file
└── netlify.toml
└── package.json
└── tailwind.config.cjs
```

# 💻 Project Commands

Run commands from the root directory:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run start` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

# ✨ Deploying

A **netlify.toml** file is included to easily deploy to Netlify. The template should also be compatible with other hosting settings but you will need to modify settings to work with an Astro project.

# 💡 Component Details

### CTA
#### Props
- title
- description
- buttonText
- buttonUrl
#### Example
```
<CTA
      title="Ready to take the next step?"
      description="Join us today and unlock your potential with our services."
      buttonText="Get Started"
      buttonUrl="/contact"
/>
```

### FAQ
#### Props
- title
- text
- questions[{question, answer}]
#### Example
```
---
const questionList = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
];
---
<FAQ title="Have questions?" text="Let's get them answered!" questions={questionList} />
```

### Features
#### Props
- title
- subtitle
- features[{title, description, icon}]
#### Example
```
---
const features: Feature[] = [
  {
    title: "Fast Performance",
    description: "Experience blazing fast load times and smooth interactions.",
    icon: "tabler:rocket",
  },
  {
    title: "Secure",
    description:
      "We prioritize your data security with industry-leading standards.",
    icon: "tabler:shield",
  },
  {
    title: "Scalable",
    description:
      "Our platform is ready to grow with your business, effortlessly scaling.",
    icon: "tabler:chart-line",
  },
];
---
<Features features={features} />
```

### Footer
The footer has no props. You can edit it directly.

### From
#### Props
- fields [{label, type, name, placeholder, options}]
- submitButtonText
- title
- infotext
#### Example
```
---
const formFields: FormField[] = [
  { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Message",
    type: "textarea",
    name: "message",
    placeholder: "Enter your message",
  },
];
---
<Form
    fields={formFields}
    submitButtonText="Submit"
    title="Contact Us"
    infotext="We will get back to you within 24 hours"
/>
```

### HeroText
#### Props
- title
- subtitle
- text
#### Example
```
<HeroText 
    title="About Us" 
    subtitle="Learn more about how we work!"
    text="We work pretty hard!"
/>
```

### HeroWithBackground
#### Props
- title
- subtitle
- text
- imgSrc
- buttonText
- button
- logo
#### Example
```
<HeroWithBackground
    title="DaisyShip"
    text="The best Astro + Tailwind template"
    imgSrc="https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    buttonText="Get Started"
    button
/>
```

### HeroWithForm
#### Props
- title
- text
#### Example
```
<HeroWithForm
    title="Contact Us"
    text="Have a question or comment? Drop us a message. You can email, call, or fill out the form here. Don't forget to follow us on social media too!"
/>
```

### ImageSide
#### Props
- title
- subtitle
- text
- buttonText
- imgSrc
- alt
- imageWidth
- reversed
#### Example
```
<ImageSide
    imgSrc="https://images.pexels.com/photos/59984/daisies-white-flower-face-59984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    imageWidth="w-1/2"
    reversed
/>
```

### Logo
#### Props
- size
- showTitle
#### Example
```
<Logo size={32} showTitle>
```

### Navbar
Best used within a layout
#### Props
- sticky (boolean, determines if the navbar will stick to the top of the screen or not)
#### Example
```
<Navbar sticky />
```

### PricingCard
#### Props
- title: string;
- subtitle: string;
- price: string;
- period: string;
- features: string[];
- buttonText: string;
#### Example
```
<PricingCard
    title="Basic"
    subtitle="Best for personal use",
    price="$25",
    period="per month",
    features=["Basic Usage", "Basic Storage", "Basic Speeds"],
    buttonText="Buy Now",
/>
```

### PricingSection
#### Props
- title
- plans
#### Example
```
---
const pricingPlans = [
  {
    title: "Basic",
    subtitle: "Best for personal use",
    price: "$25",
    period: "per month",
    features: ["Basic Usage", "Basic Usage", "Basic Usage", "Basic Usage"],
    buttonText: "Buy Now",
  },
  {
    title: "Pro",
    subtitle: "Best for professional use",
    price: "$50",
    period: "per month",
    features: ["Pro Usage", "Pro Usage", "Pro Usage", "Pro Usage"],
    buttonText: "Buy Now",
  },
  {
    title: "Enterprise",
    subtitle: "Best for large business use",
    price: "$100",
    period: "per month",
    features: [
      "Enterprise Usage",
      "Enterprise Usage",
      "Enterprise Usage",
      "Enterprise Usage",
    ],
    buttonText: "Buy Now",
  },
];
---
<PricingSection title="Available Pricing Plans" plans={pricingPlans} />
```

### Process
#### Props
- title
- subtitle
- steps
#### Example
```
---
const processSteps: ProcessStep[] = [
  {
    title: "Step 1: Planning",
    description:
      "We collaborate with you to understand the scope of your project.",
    icon: "tabler:brain", // Iconify icon (from Tabler Icons)
  },
  {
    title: "Step 2: Design",
    description: "Our design team creates mockups based on your feedback.",
    icon: "tabler:pencil", // Iconify icon (from Tabler Icons)
  },
  {
    title: "Step 3: Development",
    description:
      "We start developing the product with clean and scalable code.",
    icon: "tabler:code",
  },
  {
    title: "Step 4: Launch",
    description: "We launch the product and ensure smooth operations.",
    icon: "tabler:rocket",
  },
];
---
<Process steps={processSteps} title="Our Design Process" />
```

### ServiceWithImage
#### Props
- title: string;
- subtitle: string;
- services: Service[];
- imgSrc: string;
- reversed?: boolean;
#### Example
```
---
const services: Service[] = [
  {
    title: "Web Development",
    description: "We create high-performance, responsive websites.",
    icon: "tabler:world-www",
  },
  {
    title: "SEO Optimization",
    description: "We improve your site’s visibility on search engines.",
    icon: "tabler:search",
  },
  {
    title: "Graphic Design",
    description: "Stunning designs that capture your brand’s essence.",
    icon: "tabler:palette",
  },
  {
    title: "Content Creation",
    description: "We create engaging content for your audience.",
    icon: "tabler:file",
  },
];

const photoUrl =
  "https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
---
<ServiceWithImage
    title="Our Expertise"
    subtitle="Here are some of the services we offer to help your business grow."
    services={services}
    imgSrc={photoUrl}
/>
```

### Testimonials
#### Props
- title?: string;
- subtitle?: string;
- testimonials: Testimonial[];
#### Example
```
---
const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    title: "CEO of Company Y",
    message: "This service is amazing! Highly recommended.",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager at Company Z",
    message: "A wonderful experience from start to finish.",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Sam Wilson",
    title: "Freelancer",
    message: "Professional and timely. Couldn’t ask for more.",
    avatarUrl: "https://via.placeholder.com/150",
  },
];
---
<Testimonials testimonials={testimonials} title="What Our Clients Say" />
```

### ThemeSwitcher
#### This component provides a drop down of the installed themes. Mostly for designing and debugging than for production. Add it to you header.

### ThemeToggle
#### Component to toggle light/dark theme.

### ThemeToggleMobile
#### Component to toggle light/dark theme but for the mobile menu.
