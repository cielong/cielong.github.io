# TrackIt OAuth Redirect Handler

This GitHub Pages site handles OAuth redirects from Plaid for the TrackIt mobile app.

## How it works

1. User connects their bank account through TrackIt app
2. Plaid redirects to: `https://cielong.github.io/plaid/oauth-redirect?params...`
3. JavaScript extracts OAuth parameters and redirects to: `trackit://plaid/oauth-redirect?params...`
4. iOS opens the TrackIt app with the OAuth response

## Files

- `/index.html` - Landing page for TrackIt
- `/plaid/oauth-redirect/index.html` - OAuth redirect handler

## Configuration

The TrackIt app is configured to use this redirect URL in `PlaidConfig.swift`:

```swift
static let redirectUri = "https://cielong.github.io/plaid/oauth-redirect"
```

## Testing

To test the OAuth flow:
1. Open the TrackIt app
2. Try to connect a bank account
3. Complete the OAuth flow in your bank app
4. You should be redirected back to TrackIt

For debugging, the redirect page includes a debug mode that shows all OAuth parameters.