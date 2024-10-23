import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import './FeedbackModal.css'; // Import the CSS file

const FeedbackModal = ({ handleCloseModal }) => {
    const [starRating, setStarRating] = useState(0); // Star rating
    const [content, setContent] = useState(''); // Feedback content
    const [suggestions, setSuggestions] = useState(''); // Suggestions for improvement

    const handleSubmitFeedback = (e) => {
        e.preventDefault();

        const feedback = {
            starRating,
            content,
            suggestions, // Always include suggestions
        };

        console.log('Feedback submitted:', feedback);
        alert('Thank you for your feedback!');
        // You can send the feedback to your server or API endpoint here.

        handleCloseModal(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={handleCloseModal} className="close-button">
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="modal-body">
                    <h2 className="modal-title">Share Your Feedback</h2>

                    <form>
                        {/* Star Rating */}
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon
                                    key={star}
                                    icon={faStar}
                                    className={`star-icon ${starRating >= star ? 'filled' : ''}`}
                                    onMouseEnter={() => setStarRating(star)}
                                    onClick={() => setStarRating(star)}
                                />
                            ))}
                        </div>

                        {/* Feedback Text */}
                        <div className="feedback-input">
                            <label htmlFor="comment" className="input-label">
                                Your Feedback
                            </label>
                            <textarea
                                id="comment"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={4}
                                className="textarea"
                                placeholder="Let us know about your experience"
                            />
                        </div>

                        {/* Suggestion Field Always Visible */}
                        <div className="suggestion-input">
                            <label htmlFor="suggestions" className="input-label">
                                Suggestions to Improve (Optional)
                            </label>
                            <textarea
                                id="suggestions"
                                value={suggestions}
                                onChange={(e) => setSuggestions(e.target.value)}
                                rows={3}
                                className="textarea"
                                placeholder="Tell us how we can improve"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="submit-button-container">
                            <button
                                onClick={handleSubmitFeedback}
                                className="submit-button"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;