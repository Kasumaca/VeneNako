<?php
// support_box.php
?>

<!-- Container wrapping both support box and toggle button -->
<div id="supportContainer"
    class="fixed bottom-6 right-6 flex items-center z-50 transition-transform duration-300 transform translate-x-0">

    <!-- Toggle Button (LEFT SIDE) -->
    <button id="toggleSupportBtn"
        class="bg-gray-700 hover:bg-gray-600 text-white rounded-l-full w-8 h-14 flex items-center justify-center text-lg font-bold focus:outline-none"
        title="Toggle Support Box">
        &lt;
    </button>

    <!-- Support Box -->
    <div id="supportBox" class="bg-gray-900 shadow-lg rounded-l-lg p-4 w-44 font-sans text-gray-900 flex flex-col">

        <!-- Bug/Suggestion Button -->
        <button id="openFeedbackBtn"
            class="text-xs w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mb-4 transition-colors duration-200">
            Have Bug / Suggest?
        </button>

        <!-- Support Me Section -->
        <div>
            <h3 class="font-semibold mb-2 text-center text-white">Support Me:</h3>

            <div class="flex justify-around space-x-3">
                <!-- Ko-fi -->
                <a href="https://ko-fi.com/nakozero" target="_blank" rel="noopener noreferrer"
                    title="Support me on Ko-fi">
                    <img loading="lazy" src="Images/kofi_logo.png" alt="Ko-fi"
                        class="bg-gray-700 hover:bg-gray-500 rounded-sm p-2 h-10 w-20 object-contain">
                </a>

                <!-- PayPal -->
                <a href="https://paypal.me/VeneNako" target="_blank" rel="noopener noreferrer"
                    title="Support me on PayPal">
                    <img loading="lazy" src="Images/paypal_logo.png" alt="PayPal"
                        class="bg-gray-700 hover:bg-gray-500 rounded-sm p-2 h-10 w-20 object-contain">
                </a>

                <!-- BuyMeACoffee -->
                <a href="https://buymeacoffee.com/nakozero" target="_blank" rel="noopener noreferrer"
                    title="Support me on BuyMeACoffee">
                    <img loading="lazy" src="Images/buymeacoffee_logo.png" alt="BuyMeACoffee"
                        class="bg-gray-700 hover:bg-gray-500 rounded-sm p-2 h-10 w-20 object-contain">
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Feedback Modal -->
<div id="feedbackModal" class="fixed inset-0 flex items-center justify-center z-60 hidden"
    style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="bg-gray-800 rounded-lg shadow-lg w-100 p-6 relative text-white">
        <button id="closeFeedbackBtn"
            class="absolute top-2 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl">&times;</button>
        <h2 class="text-xl font-semibold mb-4">Send Feedback</h2>
        <form id="feedbackForm" class="space-y-4 ">
            <input type="text" id="name" name="name" placeholder="Your name"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required>

            <select id="type" name="type"
                class="bg-gray-800 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required>
                <option value="" disabled selected>Select type</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Request">Request</option>
            </select>

            <textarea id="message" name="message" rows="4" placeholder="Your message"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required></textarea>

            <button type="submit"
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition-colors duration-200">
                Send
            </button>
        </form>
    </div>
</div>

<script>
    const openBtn = document.getElementById('openFeedbackBtn');
    const closeBtn = document.getElementById('closeFeedbackBtn');
    const modal = document.getElementById('feedbackModal');
    const supportContainer = document.getElementById('supportContainer');
    const toggleBtn = document.getElementById('toggleSupportBtn');

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect form data using FormData
        let formData = new FormData(this);

        // Send AJAX request to the server
        fetch('get_function/submit_feedback.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                }
                return response.json(); // Assuming a JSON response
            })
            .then(data => {
                if (data.success) {
                    alert('Thank you for your feedback!');
                    event.target.reset(); // Reset the form
                    document.getElementById('feedbackModal').classList.add('hidden'); // Close the modal
                } else {
                    alert('Failed to submit feedback: ' + data.message);
                }
            })
            .catch(error => {
                alert('An error occurred. Please try again later.');
            });

    });





    toggleBtn.addEventListener('click', () => {
        if (supportContainer.classList.contains('translate-x-0')) {
            // slide out (move right)
            supportContainer.classList.remove('translate-x-0');
            supportContainer.classList.add('translate-x-full');
            toggleBtn.innerHTML = '&gt;';
        } else {
            // slide in (move back)
            supportContainer.classList.remove('translate-x-full');
            supportContainer.classList.add('translate-x-0');
            toggleBtn.innerHTML = '&lt;';
        }
    });
</script>