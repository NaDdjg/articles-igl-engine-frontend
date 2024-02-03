import React from "react";
import UploadSection from "./UploadSection";
import ModeratorsSection from "./ModeratorsSection";
import Footer from '../../components/Shared/Footer/Footer';
import StatsSection from "./StatsSection";

function AdminPage() {

    return (
        <>
            <div className="flex flex-col space-y-20 mt-10">
                {/* upload Section */}
                <UploadSection />

                {/* statistics section  */}
                <StatsSection />

                {/* moderators section */}
                <ModeratorsSection />
            </div>

            {/* Footer */}
            <div className="app absolute right-0 left-0 w-full mt-32">
                <Footer />
            </div>
        </>
    )
}
export default AdminPage;