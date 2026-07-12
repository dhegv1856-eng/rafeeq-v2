$folders = @(
"components/layout",
"components/navigation",
"components/home",
"components/cards",
"components/common",
"components/quran",
"components/azkar",
"components/prayer",
"components/qibla",
"components/tasbeeh",
"components/stories",
"lib",
"hooks",
"types",
"public/images",
"public/icons",
"public/fonts",
"app/quran",
"app/azkar",
"app/prayer",
"app/qibla",
"app/tasbeeh",
"app/stories",
"app/challenges",
"app/statistics",
"app/profile",
"app/settings",
"app/about",
"app/contact"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
"components/layout/Header.tsx",
"components/layout/Footer.tsx",
"components/layout/MobileMenu.tsx",

"components/navigation/Navbar.tsx",
"components/navigation/NavItem.tsx",
"components/navigation/Sidebar.tsx",

"components/home/Hero.tsx",
"components/home/Features.tsx",
"components/home/DailyChallenge.tsx",
"components/home/Statistics.tsx",
"components/home/Testimonials.tsx",
"components/home/CTA.tsx",

"components/cards/QuranCard.tsx",
"components/cards/AzkarCard.tsx",
"components/cards/PrayerCard.tsx",
"components/cards/QiblaCard.tsx",
"components/cards/TasbeehCard.tsx",
"components/cards/StoriesCard.tsx",
"components/cards/ChallengeCard.tsx",
"components/cards/StatsCard.tsx",

"components/common/Button.tsx",
"components/common/Card.tsx",
"components/common/Container.tsx",
"components/common/SectionTitle.tsx",
"components/common/Badge.tsx",
"components/common/SearchBar.tsx",
"components/common/Loading.tsx",

"lib/constants.ts",
"lib/helpers.ts",
"lib/data.ts",

"hooks/useTheme.ts",
"hooks/useLanguage.ts",

"types/index.ts",

"app/quran/page.tsx",
"app/azkar/page.tsx",
"app/prayer/page.tsx",
"app/qibla/page.tsx",
"app/tasbeeh/page.tsx",
"app/stories/page.tsx",
"app/challenges/page.tsx",
"app/statistics/page.tsx",
"app/profile/page.tsx",
"app/settings/page.tsx",
"app/about/page.tsx",
"app/contact/page.tsx"
)

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file | Out-Null
}

Write-Host ""
Write-Host "=================================="
Write-Host " Rafeeq Project Created Successfully"
Write-Host "=================================="