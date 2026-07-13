/**
 * Theme Switcher
 * Cycles through: default (brown) → green → dark → default
 */

(function() {
    const themes = ['theme-default', 'theme-green', 'theme-dark'];
    let currentIndex = 0;

    // 检测 localStorage 中保存的主题
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        const index = themes.indexOf(savedTheme);
        if (index !== -1) {
            currentIndex = index;
            applyTheme(savedTheme);
        }
    } else {
        // 默认使用第一个主题（不添加任何 class）
        applyTheme('theme-default');
    }

    // 获取切换按钮
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            // 循环到下一个主题
            currentIndex = (currentIndex + 1) % themes.length;
            const nextTheme = themes[currentIndex];
            applyTheme(nextTheme);
            localStorage.setItem('preferred-theme', nextTheme);
        });
    }

    function applyTheme(themeName) {
        // 移除所有主题 class
        document.body.classList.remove('theme-green', 'theme-dark', 'theme-default');
        
        if (themeName === 'theme-default') {
            // 默认主题不添加任何 class（因为默认样式就是它）
            // 但为了统一，可以添加一个空 class 或者不添加
            return;
        }
        
        // 添加对应的主题 class
        document.body.classList.add(themeName);
    }
})();