import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useSearch } from "@/context/search";

export default function TopNav() {
  const { data, status } = useSession();
  // console.log("data => ", data, " status => ", status);

  const { searchQuery, setSearchQuery, fetchSearchResults } = useSearch();
  // console.log("searchQuery => ", searchQuery);

  return (
    <nav className="nav p-3 justify-content-between mb-3 navigation-shadow">
      <Link className="nav-link logo" href="/">
        NEXT
      </Link>

      {/* search form */}
      {status === "authenticated" ? (
        <>
          <form
            className="d-flex mb-0"
            role="search"
            onSubmit={fetchSearchResults}
          >
            <input
              type="search"
              className="form-control align-middle"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <button className="btn">&#128270;</button>
          </form>

          <div className="adminNav d-flex">
            <Link
              className="capital"
              href={`/dashboard/${
                data?.user?.role === "admin" ? "admin" : "user"
              }`}
            >
              {data?.user?.name} ({data?.user?.role})
            </Link>
            <a
              className="pointer capital"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </a>

            <Link className="capital" href="/register">
              Register
            </Link>
          </div>
        </>
      ) : (
        <div className="d-flex">
          <Link className="capital" href="/login">
            INFO
          </Link>
        </div>
      )}
    </nav>
  );
}
