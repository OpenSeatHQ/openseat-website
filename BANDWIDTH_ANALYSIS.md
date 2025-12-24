# GitHub Pages Bandwidth Analysis

Based on [GitHub Pages limits documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), here's the bandwidth analysis for the OpenSeat website.

## GitHub Pages Limits

- **Soft bandwidth limit**: 100 GB per month
- **Published site size limit**: 1 GB
- **Rate limits**: May apply (429 status code) if excessive requests

## Current Website Size

- **index.html**: ~52 KB
- **assets/**: ~116 KB (logos, images)
- **Total current**: ~168 KB per page load
- **External resources**: Google Fonts (~50-100 KB, cached by browser)

## Estimated Media Sizes

### Screenshots (4 phone screenshots needed)

**Optimized phone screenshots for web:**
- Format: WebP or optimized PNG
- Dimensions: ~750x1334px (iPhone standard) or ~1080x1920px (Android)
- Estimated size per screenshot: **200-400 KB** (optimized)
- **Total for 4 screenshots**: ~800-1,600 KB (0.8-1.6 MB)

**If using high-quality PNGs:**
- Estimated size per screenshot: **500-800 KB**
- **Total for 4 screenshots**: ~2-3.2 MB

### Video (1 main demo video)

**Optimized web video options:**

**Option 1: Compressed MP4 (recommended)**
- Duration: 2-3 minutes
- Resolution: 1080p
- Bitrate: 2-3 Mbps
- Estimated size: **30-60 MB**

**Option 2: Highly compressed MP4**
- Duration: 2-3 minutes
- Resolution: 720p
- Bitrate: 1-1.5 Mbps
- Estimated size: **15-30 MB**

**Option 3: WebM format (better compression)**
- Duration: 2-3 minutes
- Resolution: 1080p
- Estimated size: **20-40 MB**

**Note**: Videos should be hosted externally (YouTube, Vimeo) or use a CDN for better performance and to avoid hitting GitHub Pages limits.

## Total Page Weight Estimates

### Scenario 1: Optimized (Recommended)
- HTML + CSS: ~52 KB
- Assets (logos): ~116 KB
- 4 Screenshots (WebP): ~1.2 MB
- Video (embedded from YouTube/Vimeo): ~0 KB (hosted externally)
- **Total per page load**: ~1.4 MB

### Scenario 2: Self-hosted video
- HTML + CSS: ~52 KB
- Assets (logos): ~116 KB
- 4 Screenshots (WebP): ~1.2 MB
- Video (compressed MP4): ~30 MB
- **Total per page load**: ~31.5 MB

### Scenario 3: High-quality assets
- HTML + CSS: ~52 KB
- Assets (logos): ~116 KB
- 4 Screenshots (PNG): ~2.5 MB
- Video (compressed MP4): ~30 MB
- **Total per page load**: ~32.7 MB

## Monthly Visit Capacity

### Scenario 1: Optimized (Video hosted externally)
- **Page weight**: ~1.4 MB per visit
- **100 GB limit** ÷ 1.4 MB = **~71,428 visits/month**
- **Daily capacity**: ~2,380 visits/day
- **Hourly capacity**: ~99 visits/hour

### Scenario 2: Self-hosted video
- **Page weight**: ~31.5 MB per visit
- **100 GB limit** ÷ 31.5 MB = **~3,174 visits/month**
- **Daily capacity**: ~106 visits/day
- **Hourly capacity**: ~4 visits/hour

### Scenario 3: High-quality assets
- **Page weight**: ~32.7 MB per visit
- **100 GB limit** ÷ 32.7 MB = **~3,058 visits/month**
- **Daily capacity**: ~102 visits/day
- **Hourly capacity**: ~4 visits/hour

## Recommendations

1. **Host video externally**: Use YouTube, Vimeo, or a CDN to embed the demo video. This reduces page weight from ~31 MB to ~1.4 MB, increasing capacity by **22x**.

2. **Optimize screenshots**:
   - Use WebP format with 80-85% quality
   - Compress PNGs with tools like TinyPNG or ImageOptim
   - Consider lazy loading for below-the-fold images

3. **Implement caching**:
   - Set proper cache headers (though GitHub Pages handles this)
   - Use browser caching for static assets

4. **Monitor usage**: GitHub will send a polite email if you approach limits, but it's better to monitor proactively.

5. **CDN option**: If you expect high traffic, consider using Cloudflare or similar CDN in front of GitHub Pages to:
   - Reduce bandwidth usage on GitHub
   - Improve global performance
   - Add additional caching layers

## Real-World Traffic Estimates

For a startup website:
- **Early stage**: 100-1,000 visits/month (well within limits)
- **Growth stage**: 1,000-10,000 visits/month (still safe with optimized setup)
- **Viral/High traffic**: 10,000+ visits/month (consider CDN + external video hosting)

## Conclusion

With **optimized assets and external video hosting**, you can handle **~71,000 visits/month** comfortably. Even with self-hosted video, you can handle **~3,000 visits/month**, which should be sufficient for early growth. The 100 GB limit is quite generous for a marketing website.

