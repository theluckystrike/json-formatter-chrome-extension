/**
 * JSON Formatter - Onboarding Controller
 * Multi-step onboarding flow
 *
 * @author Zovo (https://zovo.one)
 * @license MIT
 */

class ZovoOnboarding {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 3;

        // DOM Elements
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.progress-dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Enter') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
        });
    }

    updateUI() {
        // Update slides
        this.slides.forEach((slide, index) => {
            const slideNum = index + 1;
            slide.classList.toggle('active', slideNum === this.currentSlide);
        });

        // Update progress dots
        this.dots.forEach((dot, index) => {
            const dotNum = index + 1;
            dot.classList.remove('active', 'completed');

            if (dotNum === this.currentSlide) {
                dot.classList.add('active');
            } else if (dotNum < this.currentSlide) {
                dot.classList.add('completed');
            }
        });

        // Update buttons
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 1;
        }

        if (this.nextBtn) {
            if (this.currentSlide === this.totalSlides) {
                this.nextBtn.textContent = 'Get Started';
            } else {
                this.nextBtn.textContent = 'Continue';
            }
        }
    }

    prev() {
        if (this.currentSlide > 1) {
            this.currentSlide--;
            this.updateUI();
        }
    }

    next() {
        if (this.currentSlide < this.totalSlides) {
            this.currentSlide++;
            this.updateUI();
        } else {
            this.complete();
        }
    }

    goTo(slideNum) {
        if (slideNum >= 1 && slideNum <= this.totalSlides) {
            this.currentSlide = slideNum;
            this.updateUI();
        }
    }

    async complete() {
        try {
            // Mark onboarding as complete
            await chrome.storage.local.set({
                onboardingComplete: true,
                onboardingCompletedAt: Date.now()
            });

            console.log('[JSON Formatter] Onboarding completed');

            // Close the tab
            window.close();
        } catch (error) {
            console.error('[JSON Formatter] Error completing onboarding:', error);
            // Still close the tab
            window.close();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.onboarding = new ZovoOnboarding();
});
