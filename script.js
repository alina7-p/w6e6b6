$(document).ready(function () {
    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "2px");
    $("#greeting").text("Hello, I'm Alina!");
    $(".headline").css("color", "#d99acb");
    $("#lightTheme").click(function () {
        $("body").addClass("light-theme");
    });
    $("#darkTheme").click(function () {
        $("body").removeClass("light-theme");
    });

    $("#hideBtn").click(function () {
        $("#aboutDetails").hide(500);
    });
    $("#showBtn").click(function () {
        $("#aboutDetails").show(500);
    });
    $("#toggleBtn").click(function () {
        $("#aboutDetails").toggle(500);
    });

    $("#fadeInBtn").click(function () {
        $(".gallery-img").stop(true, true).fadeIn(700);
    });
    $("#fadeOutBtn").click(function () {
        $(".gallery-img").stop(true, true).fadeOut(700);
    });
    $("#fadeToggleBtn").click(function () {
        $(".gallery-img").stop(true, true).fadeToggle(700);
    });

    $(".accordion-content").hide();

    $(".accordion-title").click(function () {
        let currentPanel = $(this).next(".accordion-content");
        $(".accordion-content").not(currentPanel).slideUp(400);

        if (currentPanel.is(":visible")) {
            currentPanel.slideUp(400);
        } else {
            currentPanel.slideDown(400);
        }
    });

    $("#addSkillBtn").click(function () {
        let skill = $("#skillInput").val().trim();
        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skillsList").append("<li></li>").children("li").last().text(skill);
        $("#skillInput").val("");
    });

    $("#prependSkillBtn").click(function () {
        let skill = $("#skillInput").val().trim();
        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skillsList").prepend("<li></li>").children("li").first().text(skill);
        $("#skillInput").val("");
    });

    $("#removeSkillBtn").click(function () {

        if ($("#skillsList li").length > 0) {
            $("#skillsList li:last").remove();
        } else {
            alert("There are no skills to remove!");
        }

    });

    let isGitHub = true;
    $("#changeLinkBtn").click(function () {
        if (isGitHub) {
            $("#socialLink")
                .attr("href", "https://www.instagram.com/allunaai/")
                .text("Visit My Instagram");

        } else {
            $("#socialLink")
                .attr("href", "https://github.com/alina7-p")
                .text("Visit My GitHub");

        }
        isGitHub = !isGitHub;
    });

    $("#nameInput").on("input", function () {
        let name = $(this).val();
        $("#namePreview").text("Name: " + name);
    });

    $("#emailInput").on("input", function () {
        let email = $(this).val();
        $("#emailPreview").text("Email: " + email);
    });

    let skillsAnimated = false;
    $("#animateSkillsBtn").click(function () {

        $(".skill-bar").stop(true);
        if (!skillsAnimated) {
            $(".skill-bar").each(function () {

                let targetWidth = $(this).attr("data-width");
                $(this).animate({
                    width: targetWidth + "%"
                }, 1200);
            });

            $(this).text("Reset Skills");
            skillsAnimated = true;

        } else {
            $(".skill-bar").animate({
                width: "0%"
            }, 1200);
            $(this).text("Animate My Skills");
            skillsAnimated = false;
        }
    });
});