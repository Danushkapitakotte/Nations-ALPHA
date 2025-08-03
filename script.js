<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VAS Web</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="app-container">
    <aside class="sidebar">
      <h2>NationsAlpha</h2>
      <ul>
        <li onclick="navigate('Home')">Home</li>
        <li onclick="navigate('Capture New App')">Capture New App</li>
        <li onclick="navigate('Workflow')">Workflow</li>
        <li onclick="navigate('Search')">Search</li>
	<li onclick="navigate('Application Status')">Application Status</li>
	<li onclick="navigate('Team')">Team</li>
	<li onclick="navigate('About')">About</li>
	<li onclick="navigate('Loan Cal')">Loan Cal</li>
	<li onclick="navigate('Settings')">Settings</li>
        <!-- Add more navs as needed -->
      </ul>
    </aside>

  <main class="main-content">
      <header class="top-nav">
        <div class="tabs">
          <button>Profile</button>
          <button>Lending</button>
          <button>KYC</button>
          <button class="active">VAS</button>
          <button>Declaration</button>
          <button>Attachment Info</button>
          <button>Finalization</button>
          <button>Timeline</button>
        </div>
        <div class="user-info">
          <span>Danushka Pitakotte (WATTALA)</span>
        </div>
      </header>
        </div>
      </header>

      <!-- VAS Page -->
      <section id="vas" class="content-page active">
        <h3>VAS Selection for: DANUSHKA NIRUDAYA PITAKOTTE</h3>
        <form>
          <label>Smart Statement / E-Advice</label/> <input type="checkbox">
          <label><input type="checkbox" /> SMS Transaction Alert</label>
          <label><input type="checkbox" /> Debit Card</label>

          <div class="promo-section">
            <span>Promotional Communications <span class="vas-tag">VAS</span></span>
            <div class="toggle-row">
              <label>
                <input type="radio" name="promoToggle" value="yes" onclick="togglePromo(true)" />
                Yes
              </label>
              <label>
                <input type="radio" name="promoToggle" value="no" onclick="togglePromo(false)" checked />
                No
              </label>
            </div>
            <div id="promo-options" style="display: none;">
              <label><input type="checkbox" /> SMS</label>
              <label><input type="checkbox" /> E-Mail</label>
              <label><input type="checkbox" /> In-App Notification</label>
            </div>
          </div>
        </form>
        <div class="bottom-button">
          <button class="next-btn">NEXT</button>
        </div>
      </section>

      <!-- Placeholder for other pages -->
      <section id="profile" class="content-page">Profile Page - Coming Soon</section>
      <section id="declaration" class="content-page">Declaration Page - Coming Soon</section>
      <section id="timeline" class="content-page">Timeline Page - Coming Soon</section>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>
