export function TwitterFollowCard ({userName, name, isFollowing}) {
    return (
        <article className = 'tw-followCard'>
        <header className = 'tw-followCard-header'>
          <img className = 'tw-followCard-avatar' src={`https://i.pravatar.cc/150?u=a042581f4e29026704d/${userName}` }/>  
          <div className = 'tw-followCard-info'>
            <strong>{name}</strong>
            <span className = 'tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
            <button className = 'tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
}