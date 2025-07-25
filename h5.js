document.addEventListener('DOMContentLoaded', function() {
    // 使用更精确的选择器只匹配特定结构的blockquote
    const blockquotes = document.querySelectorAll('blockquote:has(> p:first-child > zd:first-child)');
    
    blockquotes.forEach(blockquote => {
        // 添加点击事件切换展开/折叠
        blockquote.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});