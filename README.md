# 🎭 Incident Improv

Interactive cybersecurity incident response training scenarios based on real-world breaches and incidents.

## 🚀 Live Demo

Visit the live application: [https://yourusername.github.io/incident-improv](https://yourusername.github.io/incident-improv)

## 📖 About

Incident Improv is an interactive web application that presents cybersecurity professionals with realistic incident response scenarios based on actual breaches and security incidents from 2019-2024. With 150 scenarios across 14 categories, it's designed to help security teams practice decision-making under pressure.

## ✨ Features

- **150 Real-World Scenarios**: Based on actual incidents including SolarWinds, Colonial Pipeline, Log4Shell, and more
- **14 Categories**: From AI Security to Physical Threats, Supply Chain to Ransomware
- **Interactive Learning**: Multiple choice responses with humor and real-world context
- **Difficulty Levels**: Beginner, Intermediate, and Advanced scenarios
- **Real-World Context**: Each scenario links to actual incident information
- **Modern UI**: Clean, responsive design that works on all devices

## 🎯 Scenario Categories

- 🤖 **AI & Emerging Tech** (25 scenarios)
- 🔗 **Supply Chain Risk** (12 scenarios)
- 🎣 **Social Engineering** (12 scenarios)
- ⚠️ **Threats & Vulnerabilities** (12 scenarios)
- 🚨 **Incident Response** (10 scenarios)
- 🕵️ **Physical & Insider Threats** (10 scenarios)
- 🌐 **Network & Endpoint** (10 scenarios)
- 🏢 **Specialized Security** (10 scenarios)
- 📋 **Compliance & Governance** (9 scenarios)
- 🛡️ **Data Security & Privacy** (9 scenarios)
- 🔐 **Access & Identity** (9 scenarios)
- ☁️ **Cloud & Infrastructure** (9 scenarios)
- 💻 **Technical Incidents** (8 scenarios)
- 🎯 **Security Operations** (5 scenarios)

## 🛠️ Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks required!)
- **Data**: JSON-based scenario storage
- **Hosting**: GitHub Pages
- **Design**: Responsive, mobile-first approach

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/incident-improv.git
cd incident-improv
```

2. Serve locally with Python:
```bash
python3 -m http.server 8000
```

3. Open your browser to: `http://localhost:8000`

### Deployment to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Save and wait for deployment
6. Your site will be available at: `https://yourusername.github.io/incident-improv`

## 📁 Project Structure

```
incident-improv/
├── index.html          # Main application HTML
├── scenarios.js        # JavaScript logic
├── scenarios.json      # 150 incident scenarios
├── README.md          # Documentation
└── .gitignore         # Git ignore file
```

## 🎮 How to Use

1. **Random Scenario**: Click "🎲 Random Scenario" for a random challenge
2. **Filter by Category**: Click any category box to filter scenarios
3. **Search**: Use the search bar to find specific scenarios
4. **Browse**: Scroll through the grid to explore all scenarios
5. **Learn**: Each scenario includes real-world context and references

## 📚 Featured Real-World Incidents

- SolarWinds Orion Supply Chain Attack
- Colonial Pipeline Ransomware
- Microsoft Exchange ProxyLogon
- Log4Shell (Log4j vulnerability)
- LastPass Vault Breach
- MOVEit Transfer Attacks
- Uber Breach Cover-up
- Lapsus$ Social Engineering
- ChatGPT Data Leaks
- And 140+ more!

## 🤝 Contributing

Contributions are welcome! To add new scenarios:

1. Fork the repository
2. Add scenarios to `scenarios.json` following the existing format
3. Test locally to ensure everything works
4. Submit a pull request

### Scenario Format

```json
{
  "id": 151,
  "difficulty": "intermediate",
  "category": "AI & Emerging Tech",
  "scenario": "Your scenario description...",
  "question": "What's your first move?",
  "options": [
    {"letter": "A", "text": "Funny option", "correct": false, "funny": true},
    {"letter": "B", "text": "Correct option 1", "correct": true, "funny": false},
    {"letter": "C", "text": "Correct option 2", "correct": true, "funny": false},
    {"letter": "D", "text": "Correct option 3", "correct": true, "funny": false}
  ],
  "realWorld": {
    "description": "Context about the real incident",
    "link": "https://link-to-more-info"
  }
}
```

## 📜 License

MIT License - feel free to use this for training your security teams!

## 🙏 Credits

Made with ❤️ by [Adversis](https://adversis.io)

## ⚠️ Disclaimer

All scenarios are for educational purposes only. They are based on publicly reported incidents and are designed to help security professionals improve their incident response skills.

## 🐛 Issues & Feedback

Found a bug or have a suggestion? Please [open an issue](https://github.com/yourusername/incident-improv/issues).

---

**Remember**: In incident response, perfect is the enemy of good. Make decisions, learn, and improve! 🚀