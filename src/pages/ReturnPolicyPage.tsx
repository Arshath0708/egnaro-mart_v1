export default function ReturnPolicyPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Return & Refund Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Return Eligibility</h2>
            <p>
              Products purchased from Egnaro Mart may be returned within 7 days of delivery, subject to
              the following conditions:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The product must be unused and in its original packaging.</li>
              <li>The product must not have been installed or modified in any way.</li>
              <li>All accessories, manuals, and warranty cards must be included.</li>
              <li>The product must not fall under the non-returnable category.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Non-Returnable Items</h2>
            <p>The following items are not eligible for return:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Products that have been installed, used, or modified.</li>
              <li>Products with broken seals or tampered packaging.</li>
              <li>Customized or made-to-order products.</li>
              <li>Consumable items such as wires, cables, and paint once opened.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Initiate a Return</h2>
            <p>
              To initiate a return, please contact our customer support at egnaromart@gmail.com or call
              (+91) 9442581506 within 7 days of receiving your order. Please provide your order number,
              product name, and reason for return. Our team will review your request and provide
              instructions for returning the product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Refund Process</h2>
            <p>
              Once we receive and inspect the returned product, we will process your refund within 5-7
              business days. The refund will be credited to your original payment method.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Full Refund:</strong> Issued if the product is defective, damaged during shipping,
                or significantly different from the description.
              </li>
              <li>
                <strong>Partial Refund:</strong> Issued if the product is returned in a condition different
                from what was shipped (e.g., missing accessories, damaged packaging).
              </li>
              <li>
                <strong>No Refund:</strong> Issued if the product does not meet our return eligibility
                criteria.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Damaged or Defective Products</h2>
            <p>
              If you receive a damaged or defective product, please contact us within 48 hours of delivery
              with photos of the damage. We will arrange a replacement or full refund at no additional
              cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Warranty Claims</h2>
            <p>
              Products covered under manufacturer warranty are eligible for repair or replacement as per
              the warranty terms. Warranty claims must be made within the warranty period specified on
              the product page. Contact our customer support for assistance with warranty claims.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Shipping Costs for Returns</h2>
            <p>
              If the return is due to a defective or incorrect product shipped by us, we will bear the
              return shipping cost. For all other returns, the customer is responsible for the return
              shipping cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cancellation</h2>
            <p>
              Orders can be cancelled before they are shipped. Once an order has been shipped, it cannot
              be cancelled and the standard return policy applies. To cancel an order, please contact us
              at egnaromart@gmail.com or call (+91) 9442581506.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>
              For any questions regarding our Return & Refund Policy, please contact us at
              egnaromart@gmail.com or call (+91) 9442581506. Our support hours are Monday to Friday,
              10:00 AM to 6:00 PM.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
