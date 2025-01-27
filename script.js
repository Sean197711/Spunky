// 全屏功能
document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});

// 分享功能
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this awesome game on Sprunki Game!");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

// 游戏卡片点击事件
document.addEventListener('DOMContentLoaded', function() {
    // Sprunki Retake游戏卡片点击事件
    const sprunkiRetakeCard = document.querySelector('[alt="Sprunki Retake"]').closest('.relative');
    if (sprunkiRetakeCard) {
        sprunkiRetakeCard.addEventListener('click', function() {
            // 创建模态框
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
            
            // 创建iframe容器
            const iframeContainer = document.createElement('div');
            iframeContainer.className = 'bg-white rounded-lg overflow-hidden w-full max-w-4xl';
            
            // 创建iframe
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.gameflare.com/embed/sprunki-retake/';
            iframe.width = '900';
            iframe.height = '635';
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.allowFullscreen = true;
            iframe.className = 'w-full h-full';
            
            // 创建关闭按钮
            const closeBtn = document.createElement('button');
            closeBtn.className = 'absolute top-4 right-4 text-white text-2xl hover:text-gray-300';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });
            
            // 组装元素
            iframeContainer.appendChild(iframe);
            modal.appendChild(iframeContainer);
            modal.appendChild(closeBtn);
            
            // 添加到body
            document.body.appendChild(modal);
        });
    }

    // FAQ 功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 切换当前问题的active状态
            this.classList.toggle('active');
            
            // 获取对应的答案
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                // 展开答案
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // 收起答案
                answer.style.maxHeight = '0';
            }
            
            // 关闭其他打开的FAQ
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = '0';
                }
            });
        });
    });
});
