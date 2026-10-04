#!/bin/bash

# Replace YOUR_DISTRIBUTION_ID with your actual CloudFront distribution ID
DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"
FUNCTION_NAME="url-rewrite-index"

echo "Step 1: Create CloudFront Function..."
aws cloudfront create-function \
    --name $FUNCTION_NAME \
    --function-config Comment="Rewrites URLs to append /index.html for directory requests",Runtime=cloudfront-js-1.0 \
    --function-code fileb://cloudfront-function-url-rewrite.js \
    --region us-east-1

echo ""
echo "Step 2: Publish the function..."
# Get the ETag from the create response
ETAG=$(aws cloudfront describe-function --name $FUNCTION_NAME --region us-east-1 --query 'ETag' --output text)

aws cloudfront publish-function \
    --name $FUNCTION_NAME \
    --if-match $ETAG \
    --region us-east-1

echo ""
echo "Step 3: Get the Function ARN..."
FUNCTION_ARN=$(aws cloudfront describe-function --name $FUNCTION_NAME --region us-east-1 --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo "Function ARN: $FUNCTION_ARN"

echo ""
echo "===================================================================================="
echo "NEXT STEPS (Manual - do this in AWS Console):"
echo "===================================================================================="
echo ""
echo "1. Go to CloudFront console: https://console.aws.amazon.com/cloudfront/"
echo "2. Click on your distribution ID: $DISTRIBUTION_ID"
echo "3. Go to the 'Behaviors' tab"
echo "4. Select the default behavior (usually Path pattern: *) and click 'Edit'"
echo "5. Scroll down to 'Function associations'"
echo "6. Under 'Viewer request', select 'CloudFront Functions'"
echo "7. Select function: $FUNCTION_NAME"
echo "8. Click 'Save changes'"
echo "9. Wait for deployment to complete (Status: Deployed)"
echo ""
echo "===================================================================================="
echo ""
echo "Alternatively, you can use this AWS CLI command to associate the function:"
echo ""
echo "First, get your current distribution config:"
echo "aws cloudfront get-distribution-config --id $DISTRIBUTION_ID > dist-config.json"
echo ""
echo "Then update the config to add the function association and apply it."
echo "(This is complex and easier to do in the console)"
