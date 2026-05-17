const SidebarComponent = {
    links: [
        { page: "dashboard", href: "index.html", label: "Visão Geral", icon: "dashboard" },
        { page: "estoque", href: "estoque.html", label: "Estoque & Produtos", icon: "box" },
        { page: "movimentacoes", href: "movimentacoes.html", label: "Movimentações", icon: "arrows" },
        { page: "relatorios", href: "relatorios.html", label: "Relatórios", icon: "chart" },
        { page: "configuracoes", href: "configuracoes.html", label: "Configurações", icon: "gear", separated: true }
    ],

    render(currentPage) {
        const root = document.querySelector("#sidebar-root");
        if (!root) return;

        const items = this.links.map((item) => {
            const divider = item.separated ? '<span class="sage-menu-divider"></span>' : "";
            const active = item.page === currentPage ? "active" : "";

            return `
                ${divider}
                <a class="sage-menu-link ${active}" data-nav="${item.page}" href="${item.href}">
                    ${SageIcons[item.icon]}
                    ${item.label}
                </a>
            `;
        }).join("");

        root.innerHTML = `
            <aside class="sage-sidebar">
                <a class="sage-brand" href="index.html">
                    <span class="sage-brand-icon">${SageIcons.wrench}</span>
                    <span>
                        <strong>S.A.G.E.</strong>
                        <small>Painel Administrativo</small>
                    </span>
                </a>

                <nav class="sage-menu">
                    <span class="sage-menu-label">Menu principal</span>
                    ${items}
                </nav>

                <div class="sage-user-card">
                    <div class="sage-user">
                        <span class="sage-user-avatar">OC</span>
                        <span>
                            <strong>Oficina Central</strong>
                            <small>Admin</small>
                        </span>
                    </div>

                    <a class="sage-logout" href="login.html">↪ Sair do Sistema</a>
                </div>
            </aside>
        `;
    }
};
