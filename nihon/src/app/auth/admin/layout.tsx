import SideNav from "@/components/adminPages/SideNav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
        <div>
            <SideNav/>
        </div>
        <div className="overflow-y-auto w-full">{children}</div>
    </div>
  );
}