# Fix CloudFront Directory Index Access

## Problem
CloudFront returns "Access Denied" when accessing URLs like `/dataset/iris` because it doesn't automatically serve `/dataset/iris/index.html`.

## Solution
Deploy a CloudFront Function to rewrite URLs and append `/index.html` for directory requests.

---

## AWS Console Method (Easiest)

### Step 1: Create the CloudFront Function

1. Log in to AWS Console: https://console.aws.amazon.com/cloudfront/
2. In the left sidebar, click **Functions**
3. Click **Create function**
4. Configure:
   - **Name**: `url-rewrite-index`
   - **Description**: `Rewrites URLs to append /index.html for directory requests`
   - **Runtime**: `cloudfront-js-1.0`
5. Click **Create function**

### Step 2: Add the Function Code

1. In the function editor, replace the default code with the contents of `cloudfront-function-url-rewrite.js`
2. Click **Save changes**

### Step 3: Test the Function (Optional but Recommended)

1. Click the **Test** tab
2. Under **Event type**, select "Viewer Request"
3. In the test event, modify the request URI to test:
   ```json
   {
     "version": "1.0",
     "context": {
       "requestId": "test"
     },
     "viewer": {
       "ip": "1.2.3.4"
     },
     "request": {
       "method": "GET",
       "uri": "/dataset/iris",
       "headers": {},
       "cookies": {}
     }
   }
   ```
4. Click **Test function**
5. Verify the output shows `"uri": "/dataset/iris/index.html"`

### Step 4: Publish the Function

1. Click the **Publish** tab
2. Click **Publish function**
3. Confirm by clicking **Publish** again

### Step 5: Associate with Your Distribution

1. Go back to CloudFront → **Distributions**
2. Click on your distribution (jmagunia.com)
3. Go to the **Behaviors** tab
4. Select the **Default (*)** behavior
5. Click **Edit**
6. Scroll down to **Function associations**
7. Under **Viewer request**:
   - **Function type**: CloudFront Functions
   - **Function ARN/Name**: Select `url-rewrite-index`
8. Click **Save changes**

### Step 6: Wait for Deployment

- Wait 2-5 minutes for CloudFront to deploy the changes
- Status will change from "Deploying" to "Deployed"

### Step 7: Test

- Visit: https://jmagunia.com/dataset/iris
- Should now work without "Access Denied"!

---

## AWS CLI Method

If you prefer command line:

1. Update the script with your distribution ID:
   ```bash
   nano deploy-cloudfront-function.sh
   # Change YOUR_DISTRIBUTION_ID to your actual ID
   ```

2. Run the script:
   ```bash
   cd ~/Downloads/jmagunia.com
   ./deploy-cloudfront-function.sh
   ```

3. Follow the manual steps printed at the end to associate the function with your distribution.

---

## Notes

- CloudFront Functions are very cheap (free for first 2M requests/month)
- This function runs on every viewer request before hitting the cache
- Changes take 2-5 minutes to deploy globally
- You can update the function anytime and republish

## Troubleshooting

If still getting Access Denied after deployment:
1. Check CloudFront distribution status is "Deployed"
2. Verify function is associated with the behavior
3. Clear CloudFront cache (Create invalidation for `/*`)
4. Try in incognito mode or different browser
