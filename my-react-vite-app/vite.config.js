{
  "root": true,
  "base": "/",
  "build": {
    "outDir": "dist",
    "assetsDir": "assets",
    "rollupOptions": {
      "output": {
        "entryFileNames": "assets/[name].js",
        "chunkFileNames": "assets/[name].js",
        "assetFileNames": "assets/[name].[ext]"
      }
    }
  },
  "server": {
    "port": 3000,
    "open": true
  },
  "plugins": [
    "@vitejs/plugin-react"
  ]
}