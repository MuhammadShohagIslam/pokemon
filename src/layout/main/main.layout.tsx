import Footer from "@/components/shared/Footer/footer";
import Navbar from "@/components/shared/Navbar/navbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;