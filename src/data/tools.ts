export type Tool = {
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
  category: string;
  path: string;
  ogImage: string;
  features: string[];
  faq: { question: string; answer: string }[];
};

export const tools: Tool[] = [
  {
    name: "PDF to JPG",
    slug: "pdf-to-jpg",
    description: "Convert PDF files into high quality JPG images instantly.",
    seoDescription:
      "Convert PDF files to high quality JPG images instantly with ToolZen's fast and free PDF to JPG converter.",
    category: "PDF Tools",
    path: "/tools/pdf-to-jpg",
    ogImage: "https://toolzen.com/og/pdf-to-jpg.png",
    features: [
      "Fast PDF page extraction",
      "High-resolution JPG output",
      "Secure browser-based conversion",
    ],
    faq: [
      {
        question: "Can I convert multi-page PDFs?",
        answer: "Yes, ToolZen converts every page in your PDF into separate JPG images.",
      },
      {
        question: "Is my file uploaded to a server?",
        answer: "Conversion happens in the browser for most files, keeping your data private.",
      },
    ],
  },
  {
    name: "JPG to PDF",
    slug: "jpg-to-pdf",
    description: "Convert JPG images into PDF documents quickly.",
    seoDescription:
      "Merge JPG images into a single PDF document with ToolZen's JPG to PDF converter. Fast, free, and easy to use.",
    category: "PDF Tools",
    path: "/tools/jpg-to-pdf",
    ogImage: "https://toolzen.com/og/jpg-to-pdf.png",
    features: [
      "Merge JPGs into one PDF",
      "Preserve image quality",
      "Download instantly",
    ],
    faq: [
      {
        question: "Can I upload multiple images?",
        answer: "Yes, upload multiple JPG files and combine them into a single PDF.",
      },
      {
        question: "Does the tool work on mobile?",
        answer: "Yes, the tool is responsive and works on desktop and mobile browsers.",
      },
    ],
  },
  {
    name: "Image Compressor",
    slug: "image-compressor",
    description: "Compress images without losing quality.",
    seoDescription:
      "Reduce JPG, PNG, and WEBP file sizes without losing quality using ToolZen's image compressor.",
    category: "Image Tools",
    path: "/tools/image-compressor",
    ogImage: "https://toolzen.com/og/image-compressor.png",
    features: [
      "Smart compression settings",
      "Fast browser-based processing",
      "Preview before download",
    ],
    faq: [
      {
        question: "What image formats are supported?",
        answer: "ToolZen supports JPG, PNG, and WEBP compression.",
      },
      {
        question: "Does compression reduce visual quality?",
        answer: "Our compressor keeps visual quality high while reducing file size.",
      },
    ],
  },
  {
    name: "QR Generator",
    slug: "qr-generator",
    description: "Generate QR codes instantly.",
    seoDescription:
      "Create QR codes for URLs, text, and contact details quickly using ToolZen's free QR generator.",
    category: "Utility",
    path: "/tools/qr-generator",
    ogImage: "https://toolzen.com/og/qr-generator.png",
    features: [
      "Create QR codes in seconds",
      "Supports URLs and text",
      "Download QR PNG files",
    ],
    faq: [
      {
        question: "Can I use the QR code for websites?",
        answer: "Yes, enter any URL and ToolZen will generate a website-ready QR code.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes, the QR generator is completely free to use.",
      },
    ],
  },
  {
    name: "QR Scanner",
    slug: "qr-scanner",
    description: "Scan QR codes directly from your camera or image files.",
    seoDescription:
      "Scan QR codes easily using ToolZen's QR scanner with camera support and fast decoding.",
    category: "Utility",
    path: "/tools/qr-scanner",
    ogImage: "https://toolzen.com/og/qr-scanner.png",
    features: [
      "Camera scanning support",
      "Fast QR code decoding",
      "Copy results quickly",
    ],
    faq: [
      {
        question: "Can I scan QR codes from images?",
        answer: "Yes, upload or use your camera to scan QR codes within the browser.",
      },
      {
        question: "Is the scanner secure?",
        answer: "The scanner runs in your browser and does not store scanned data permanently.",
      },
    ],
  },
  {
    name: "UUID Generator",
    slug: "uuid-generator",
    description: "Generate unique UUIDs for development and tracking.",
    seoDescription:
      "Create secure unique identifiers with ToolZen's UUID generator for development and data tracking.",
    category: "Developer Tools",
    path: "/tools/uuid-generator",
    ogImage: "https://toolzen.com/og/uuid-generator.png",
    features: [
      "Generate UUID v4 instantly",
      "Copy with one click",
      "Perfect for developers",
    ],
    faq: [
      {
        question: "What type of UUID does it create?",
        answer: "ToolZen generates standard UUID v4 identifiers.",
      },
      {
        question: "Can I use UUIDs in production?",
        answer: "Yes, generated UUIDs are safe for many identity and tracking use cases.",
      },
    ],
  },
  {
    name: "Word Counter",
    slug: "word-counter",
    description: "Count words, characters, and paragraphs instantly.",
    seoDescription:
      "Analyze text length with ToolZen's word counter for content editing, SEO, and writing workflows.",
    category: "Utility",
    path: "/tools/word-counter",
    ogImage: "https://toolzen.com/og/word-counter.png",
    features: [
      "Word and character counts",
      "Readability insights",
      "Fast text analysis",
    ],
    faq: [
      {
        question: "Can the tool count multiple paragraphs?",
        answer: "Yes, it counts text across multiple paragraphs and line breaks.",
      },
      {
        question: "Is the content saved?",
        answer: "No, text analysis happens in your browser and is not stored on our servers.",
      },
    ],
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    description: "Change text casing quickly between upper, lower, and title case.",
    seoDescription:
      "Convert text casing instantly with ToolZen's case converter for headlines, code, and copy editing.",
    category: "Developer Tools",
    path: "/tools/case-converter",
    ogImage: "https://toolzen.com/og/case-converter.png",
    features: [
      "Uppercase, lowercase, title case",
      "Easy copy to clipboard",
      "Perfect for content editing",
    ],
    faq: [
      {
        question: "What case options are supported?",
        answer: "The converter supports upper, lower, sentence, title, and toggle case.",
      },
      {
        question: "Can I convert large text blocks?",
        answer: "Yes, it works well for short and long form text.",
      },
    ],
  },
  {
    name: "Binary ↔ Text Converter",
    slug: "binary-text-converter",
    description: "Convert binary strings to readable text and vice versa.",
    seoDescription:
      "Convert between binary and text quickly using ToolZen's binary text converter for development and learning.",
    category: "Developer Tools",
    path: "/tools/binary-text-converter",
    ogImage: "https://toolzen.com/og/binary-text-converter.png",
    features: [
      "Binary to text conversion",
      "Text to binary output",
      "Copy results instantly",
    ],
    faq: [
      {
        question: "Can I convert binary code to text?",
        answer: "Yes, the converter supports standard binary text encoding.",
      },
      {
        question: "Is the conversion accurate?",
        answer: "The tool uses standard encoding rules for text/binary conversion.",
      },
    ],
  },
  {
    name: "Password Generator",
    slug: "password-generator",
    description: "Create strong passwords with custom length and complexity.",
    seoDescription:
      "Generate secure passwords with ToolZen's customizable password generator for safer logins and accounts.",
    category: "Utility",
    path: "/tools/password-generator",
    ogImage: "https://toolzen.com/og/password-generator.png",
    features: [
      "Custom length and strength",
      "Secure random passwords",
      "One-click copy",
    ],
    faq: [
      {
        question: "Can I choose password length?",
        answer: "Yes, choose the length and complexity that fits your needs.",
      },
      {
        question: "Is the generator secure?",
        answer: "Yes, it creates random passwords that are safe for personal use.",
      },
    ],
  },
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Format and validate JSON data for development and APIs.",
    seoDescription:
      "Clean up JSON with ToolZen's formatter and validator for API responses, configs, and development.",
    category: "Developer Tools",
    path: "/tools/json-formatter",
    ogImage: "https://toolzen.com/og/json-formatter.png",
    features: [
      "Pretty print JSON",
      "Validate syntax instantly",
      "Copy clean data",
    ],
    faq: [
      {
        question: "Does the formatter validate my JSON?",
        answer: "Yes, it highlights invalid JSON and shows corrected formatting.",
      },
      {
        question: "Can I paste raw JSON?",
        answer: "Yes, paste raw JSON and quickly format it for readability.",
      },
    ],
  },
  {
    name: "URL Encoder",
    slug: "url-encoder",
    description: "Encode or decode URLs securely and quickly.",
    seoDescription:
      "Encode and decode URLs with ToolZen's URL encoder for safe links and clean query strings.",
    category: "Utility",
    path: "/tools/url-encoder",
    ogImage: "https://toolzen.com/og/url-encoder.png",
    features: [
      "Encode and decode URLs",
      "Safe query string handling",
      "Works with long URLs",
    ],
    faq: [
      {
        question: "What does URL encoding do?",
        answer: "It converts special characters into safe URL format.",
      },
      {
        question: "Can I decode encoded links?",
        answer: "Yes, the tool handles both encoding and decoding.",
      },
    ],
  },
  {
    name: "JWT Decoder",
    slug: "jwt-decoder",
    description: "Decode JSON web tokens and inspect claims securely.",
    seoDescription:
      "Decode JWT tokens quickly with ToolZen's JWT decoder to inspect payloads and claims.",
    category: "Developer Tools",
    path: "/tools/jwt-decoder",
    ogImage: "https://toolzen.com/og/jwt-decoder.png",
    features: [
      "Decode JWT payloads",
      "Inspect token claims",
      "Safe client-side decoding",
    ],
    faq: [
      {
        question: "Is my JWT data stored?",
        answer: "No, JWT decoding happens locally in your browser.",
      },
      {
        question: "Can I decode expired tokens?",
        answer: "Yes, the decoder shows token contents regardless of expiration.",
      },
    ],
  },
  {
    name: "Hash Generator",
    slug: "hash-generator",
    description: "Generate secure hashes for text and passwords.",
    seoDescription:
      "Create SHA-256, MD5, and other secure hashes with ToolZen's hash generator for developers.",
    category: "Developer Tools",
    path: "/tools/hash-generator",
    ogImage: "https://toolzen.com/og/hash-generator.png",
    features: [
      "Generate secure hashes",
      "Supports multiple algorithms",
      "Copy hash output instantly",
    ],
    faq: [
      {
        question: "Which hashing algorithms are available?",
        answer: "The tool supports popular hashes like SHA-256 and MD5.",
      },
      {
        question: "Can I hash plain text?",
        answer: "Yes, enter text and generate a secure hash in one click.",
      },
    ],
  },
  {
    name: "Regex Tester",
    slug: "regex-tester",
    description: "Test regular expressions with live matches and explanations.",
    seoDescription:
      "Build and test regular expressions quickly using ToolZen's regex tester with live feedback.",
    category: "Developer Tools",
    path: "/tools/regex-tester",
    ogImage: "https://toolzen.com/og/regex-tester.png",
    features: [
      "Live regex matching",
      "Support for regex flags",
      "Instant test output",
    ],
    faq: [
      {
        question: "Does the tester support flags?",
        answer: "Yes, you can enable common regex flags like global and multiline.",
      },
      {
        question: "Can I preview matches?",
        answer: "Yes, the tool highlights matches as you type your regex.",
      },
    ],
  },
  {
    name: "Text Diff Checker",
    slug: "text-diff-checker",
    description: "Compare text blocks and highlight differences instantly.",
    seoDescription:
      "Compare two pieces of text with ToolZen's diff checker to find changes and edits fast.",
    category: "Developer Tools",
    path: "/tools/text-diff-checker",
    ogImage: "https://toolzen.com/og/text-diff-checker.png",
    features: [
      "Side-by-side text comparison",
      "Highlight additions and removals",
      "Works with paragraphs and code",
    ],
    faq: [
      {
        question: "Can I compare large text blocks?",
        answer: "Yes, it handles long text changes quickly.",
      },
      {
        question: "Does the diff highlight changes?",
        answer: "Yes, it clearly highlights what changed between two texts.",
      },
    ],
  },
  {
    name: "Age Calculator",
    slug: "age-calculator",
    description: "Calculate your age from your birth date instantly.",
    seoDescription:
      "Use ToolZen's age calculator to compute your age quickly and accurately from any date.",
    category: "Productivity",
    path: "/tools/age-calculator",
    ogImage: "https://toolzen.com/og/age-calculator.png",
    features: [
      "Compute age by date of birth",
      "Instant results",
      "Clean responsive design",
    ],
    faq: [
      {
        question: "Can I calculate age for any date?",
        answer: "Yes, enter your birth date and get the exact age instantly.",
      },
      {
        question: "Is the calculator free?",
        answer: "Yes, ToolZen provides this age calculator for free.",
      },
    ],
  },
  {
    name: "Base64 Encoder",
    slug: "base64-encoder",
    description: "Encode or decode text with Base64 quickly.",
    seoDescription:
      "Encode text to Base64 or decode it back with ToolZen's Base64 encoder and decoder.",
    category: "Utility",
    path: "/tools/base64-encoder",
    ogImage: "https://toolzen.com/og/base64-encoder.png",
    features: [
      "Base64 encode and decode",
      "Fast browser processing",
      "Safe copy feature",
    ],
    faq: [
      {
        question: "What is Base64 encoding?",
        answer: "It converts binary data into ASCII text for safe transport.",
      },
      {
        question: "Can I decode Base64 strings?",
        answer: "Yes, the tool supports both encoding and decoding.",
      },
    ],
  },
  {
    name: "Color Picker",
    slug: "color-picker",
    description: "Select colors and copy values for web design and branding.",
    seoDescription:
      "Choose brand colors quickly with ToolZen's color picker and copy HEX, RGB, or HSL values.",
    category: "Image Tools",
    path: "/tools/color-picker",
    ogImage: "https://toolzen.com/og/color-picker.png",
    features: [
      "Pick colors visually",
      "Copy HEX, RGB, HSL values",
      "Designed for designers and developers",
    ],
    faq: [
      {
        question: "Can I get color codes for web design?",
        answer: "Yes, copy HEX, RGB, and HSL values instantly.",
      },
      {
        question: "Does it support custom colors?",
        answer: "Yes, choose any color or enter a custom value.",
      },
    ],
  },
];

export const categories = Array.from(new Set(tools.map((tool) => tool.category))).sort();
