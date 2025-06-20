
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="mb-6"
          >
            ← Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Prime Lab Studios' services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-700 mb-4">
              Prime Lab Studios provides professional video editing services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Short-form content creation and editing</li>
              <li>Long-form content production</li>
              <li>Carousel posts design</li>
              <li>Content strategy consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Providing accurate project requirements and materials</li>
              <li>Timely payment for services rendered</li>
              <li>Ensuring they have rights to all provided content</li>
              <li>Providing feedback within agreed timeframes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms will be agreed upon before project commencement. Late payments may result in project delays or suspension of services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Upon full payment, clients retain rights to the final delivered content. Prime Lab Studios retains the right to showcase completed work in portfolios and marketing materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Prime Lab Studios' liability is limited to the amount paid for the specific service. We are not liable for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="text-gray-700">
              Email: hello@primelabstudios.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
