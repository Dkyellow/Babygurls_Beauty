document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    if (mobileToggle && desktopNav) {
        mobileToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('active');

            // Animate hamburger bars
            const isActive = desktopNav.classList.contains('active');
            mobileToggle.classList.toggle('open', isActive);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (desktopNav.classList.contains('active')) {
                    desktopNav.classList.remove('active');
                    mobileToggle.classList.remove('open');
                }
            }
        });
    });

    // Booking Form Handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Booking...';
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            try {
                // Send data to Supabase
                const { error } = await _supabase
                    .from('bookings')
                    .insert([
                        {
                            name: data.name,
                            phone: data.phone,
                            email: data.email,
                            service: data.service,
                            date: data.date,
                            time: data.time,
                            message: data.message,
                            status: 'pending' // Default status
                        }
                    ]);

                if (!error) {
                    // Show success message
                    bookingForm.innerHTML = `
                        <div class="success-message" style="text-align: center; padding: 2rem;">
                            <div style="font-size: 3rem; color: #d4a373; margin-bottom: 1rem;">✨</div>
                            <h3 style="margin-bottom: 1rem;">Booking Confirmed!</h3>
                            <p>Thank you, ${data.name}. We have received your booking request.</p>
                            <p>We will contact you at ${data.phone} to confirm the details.</p>
                            <button onclick="location.reload()" class="btn-submit" style="margin-top: 1rem; width: auto; padding: 0.5rem 1.5rem;">Book Another</button>
                        </div>
                    `;
                } else {
                    console.error('Supabase Error:', error);
                    alert('Something went wrong. Please try again.');
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please check your connection and try again.');
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
