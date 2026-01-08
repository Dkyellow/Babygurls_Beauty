# Deploying to Netlify

Netlify is perfect for this project because it is now a static site.

## 1. Prepare Your Files
Ensure you have the following files in your folder:
- `index.html` (Home/Booking page)
- `admin_login.html` (Admin Login)
- `admin.html` (Dashboard)
- `script.js`
- `config.js` (With your keys)
- `styles.css`
- `images/` folder

## 2. Deploy (Drag & Drop Method - Easiest)
1.  Go to [app.netlify.com](https://app.netlify.com/drop).
2.  If you are not logged in, sign up/log in.
3.  **Drag and drop** your entire `Babygurls_ Beauty` folder onto the page area that says "Drag and drop your site folder here".
4.  Wait a few seconds for it to upload.

## 3. Your URLs
Once deployed, Netlify will give you a random URL (e.g., `silly-panda-123456.netlify.app`).

**To customize it:**
1.  Click **"Site settings"**.
2.  Click **"Change site name"**.
3.  Enter `babygurlsbeauty` (if available).

**Your final URLs will be:**
*   **Public Website**: `https://babygurlsbeauty.netlify.app/`
*   **Admin Login**: `https://babygurlsbeauty.netlify.app/admin_login.html`
*   **Admin Dashboard**: `https://babygurlsbeauty.netlify.app/admin.html`
    *(Note: Users cannot access `admin.html` without logging in because we added JavaScript protection).*

## 4. Redirect Rule (Optional but Recommended)
To prevent people from typing `/admin.html` and seeing a flash of the page (even though they get redirected), you can create a text file named `_redirects` in your folder with this content:

```
# Redirect default admin route to login
/admin   /admin_login.html   200
```
This allows you to just type `.../admin` instead of the full html filename.
