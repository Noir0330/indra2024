import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="dashbaord">
      <div className="dashNav">
        <nav>
          <Link href="/dashboard/admin" className="nav-link">
            Admin
          </Link>
          <Link href="/dashboard/admin/blog/create" className="nav-link">
            Create Blog
          </Link>
          <Link href="/dashboard/admin/blog/list" className="nav-link">
            Blogs List
          </Link>
          <Link href="/dashboard/admin/blog/list" className="nav-link">
            Client Phones
          </Link>
          <Link href="/dashboard/admin/blog/list" className="nav-link">
            Client Comments
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
