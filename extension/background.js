const token = ''

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => ({
    requestHeaders: details.requestHeaders
      .filter((header) => header.name !== 'Authorization')
      .concat([{
        name: 'Authorization',
        value: `Bearer ${token}`
      }])
  }),
  {
    urls: [
      "https://*.run.app/*"
    ],
    types: [
      "main_frame",
      "sub_frame",
      "xmlhttprequest"
    ]
  },
  [
    "requestHeaders",
    "blocking"
  ]
)
