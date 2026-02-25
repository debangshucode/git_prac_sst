type userRole = "admin" | "user"
interface user {
    readonly id: string,
    userName: string,
    role: userRole
}
interface Session {
    readonly sessionId: string,
    userId: string,
    createdAt: string,
    isActive: boolean
}

class SessionManager {
    private users: user[] = [];
    private sessions: Session[] = [];

    addUser(user: user): void {
        this.users.push(user)
    }

    logIn(userID: string): Session | undefined {
        if (!this.users.find((user): boolean => user.id === userID)) {
            return undefined
        }
        const newSession: Session = {
            sessionId: crypto.randomUUID(),
            userId: userID,
            createdAt: new Date().toDateString(),
            isActive: true
        }
        this.sessions.push(newSession)
        return newSession;
    }

    logOut(sessionID: string): boolean {
       let id:Session|undefined = this.sessions.find((x):boolean=> x.sessionId === sessionID)
       if(id===undefined){
        return false
       }
       else{
        id.isActive = false
       }
       return true
    }
    getActivSessions():Session[]{
        let actSession:Session[] = this.sessions.filter(x=>x.isActive===true)
        return actSession
    }
}

const manager = new SessionManager();

manager.addUser({
    id: "1",
    userName: "Ezio",
    role: "admin"
});

manager.addUser({
    id: "2",
    userName: "Arpan",
    role: "user"
});

const session1 = manager.logIn("1");
console.log("Session 1:", session1);

const session2 = manager.logIn("2");
console.log("Session 2:", session2);

const session3 = manager.logIn("999");
console.log("Invalid Login:", session3);

console.log("Active Sessions:", JSON.stringify(manager.getActivSessions()));

if (session1) {
    manager.logOut(session1.sessionId);
}

console.log("After Logout:", JSON.stringify(manager.getActivSessions()));