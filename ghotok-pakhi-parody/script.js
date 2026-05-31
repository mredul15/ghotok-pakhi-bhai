// ১. প্যারোডি প্রশ্ন এবং অপশনসমূহ
const questions = [
    {
        text: "মাশাআল্লাহ্ ভালো পছন্দ। এবার বলুন, পাত্রের নূন্যতম শিক্ষাগত যোগ্যতা কী হওয়া চাই?",
        options: ["৫ পাশ (অভিজ্ঞতা বেশি)", "উইদাউট এক্সাম জিপিএ-৫", "ফেসবুক ইউনিভার্সিটির গবেষক", "ভার্সিটি ড্রপআউট (ভবিষ্যত বিল গেটস)"]
    },
    {
        text: "জি বুঝতে পেরেছি। পাত্রের বর্তমান পেশা বা কর্মক্ষেত্র কেমন হওয়া দরকার?",
        options: ["ডিজিটাল রিকশা চালক (মামা খালি নাই)", "পলাতক ছাত্র লীগ (লুকিয়ে ডেট করবে)", "মা বাবার বেকার সন্তান (আজীবন গ্যারান্টি)", "ইউটিউব কমেন্ট সেকশনের রোস্টার"]
    },
    {
        text: "সুন্দর! শেষ প্রশ্ন আপু, পাত্রের দেশের বাড়ি বা জেলা কোন অঞ্চলের হলে আপনার ভালো হয়?",
        options: ["গোপন আস্তানা (খুঁজে পাওয়া যাবে না)", "টং দোকানের কোণা (স্থায়ী ঠিকানা)", "যাত্রাবাড়ীর জ্যামের ভেতর", "শ্বশুরবাড়ির সম্পত্তি যেখানে আছে"]
    }
];

// ২. ১০টি প্রিলোডেড পাত্রের ডাটা এবং ফানি ইমেজ লিংক
const funnyGrooms = [
    { 
        name: "মজনু মিয়া (CEO of চা-এর দোকান)", 
        age: "২৭ বছর", 
        job: "ফেসবুক স্ক্রোলিং ও টং দোকানে আড্ডা", 
        location: "পুরান ঢাকা", 
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // এখানে ফানি ছবির লিঙ্ক দিতে পারেন
        bio: "পড়ালেখা শেষ করতে পারেনি কারণ পরীক্ষার দিন উনার ঘুম ভাঙতো না। তবে চা বানাতে ও মানুষের সমালোচনা করতে পিএইচডি করা।" 
    },
    { 
        name: "বিল্টু ব্রো (Crypto Trader)", 
        age: "২৫ বছর", 
        job: "ল্যাপটপের দিকে তাকিয়ে দীর্ঘশ্বাস ফেলা", 
        location: "গুলশান", 
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bio: "উচ্চশিক্ষিত হওয়ার চেষ্টা করেছিলেন, কিন্তু ক্রিপ্টোকারেন্সিতে লস খেয়ে এখন..." 
    },
    { 
        name: "কুদরত আলী (বিসিএস ২৫তম বার ট্রাইকারী)", 
        age: "৩৫ বছর", 
        job: "চাকরির প্রস্তুতি (আজীবন)", 
        location: "মিরপুর", 
        image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=300&q=80",
        bio: "বিয়ের আসরে কাজী সাহেবকে 'বিয়ে কত প্রকার ও কী কী' জিজ্ঞেস করে বসতে পারেন।" 
    },
    { 
        name: "ডিজে রনি (Rapper & Influencer)", 
        age: "২৩ বছর", 
        job: "টিকটক ও রিলস বানানো", 
        location: "উত্তরা", 
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        bio: "মাথায় রঙিন চুল আর কানে দুল আছে। কথায় কথায় 'Yo Yo' বলেন।" 
    },
    { 
        name: "জাব্বার আলী (প্রবাসী ট্রাভেলার)", 
        age: "৩০ বছর", 
        job: "মালদ্বীপে গিয়ে ছবি তুলে ফেসবুকে দেওয়া", 
        location: "সিলেট", 
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        bio: "লন্ডন যাওয়ার স্বপ্ন নিয়ে সিলেট ঘুরে বেড়ান। আইফোন ১৪ প্রো ম্যাক্স আছে উনার।" 
    },
    { 
        name: "হাবলু ভাই (বাপের হোটেলের ম্যানেজার)", 
        age: "২৬ বছর", 
        job: "বাপের টাকায় ফুচকা খাওয়া", 
        location: "ধানমন্ডি", 
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        bio: "সারা দিন জিম করেন আর প্রোটিন শেক খান। বাপের পকেট ফাঁকা করাই উনার কাজ।" 
    },
    { 
        name: "সোলায়মান (কবি ও দার্শনিক)", 
        age: "২৯ বছর", 
        job: "বেকারত্ব উদযাপন", 
        location: "চট্টগ্রাম", 
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
        bio: "ক্ষুধা লাগলে চমৎকার বিরহের কবিতা লিখে ক্ষুধা মেটাতে পারেন।" 
    },
    { 
        name: "কালাম শর্টকাট (আইটি বিশেষজ্ঞ)", 
        age: "২৮ বছর", 
        job: "মানুষের ওয়াইফাই পাসওয়ার্ড হ্যাক করা", 
        location: "যাত্রাবাড়ী", 
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
        bio: "আপনার ফেসবুক পাসওয়ার্ড অলরেডি উনার মুখস্থ।" 
    },
    { 
        name: "মি. প্যান্টলুন (ফ্যাশন ডিজাইনার)", 
        age: "২৪ বছর", 
        job: "ছেঁড়া জিন্স বিক্রি করা", 
        location: "উত্তরা", 
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
        bio: "উনার ডিজাইন করা কাপড় পরলে আপনার আত্মীয়-স্বজন ভাববে আপনার ওপর দিয়ে কোনো ঝড় বয়ে গেছে।" 
    },
    { 
        name: "আবুল কালাম (জমিদার বংশের শেষ প্রদীপ)", 
        age: "৩২ বছর", 
        job: "নিজের জমিজমা দেখাশোনা", 
        location: "গাজীপুর", 
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        bio: "উনার ১০টি গরু আর ৫ তলা বাড়ি আছে। আপনি রাগ করলে উনাকে দিয়ে ঘর মোছাতে পারবেন।" 
    }
];

let currentStep = 0;
const userAnswers = [];

function nextQuestion() {
    const dropdown = document.getElementById("currentDropdown");
    const selectedValue = dropdown.value;

    if (!selectedValue) {
        alert("দয়া করে একটি অপশন সিলেক্ট করুন আপু!");
        return;
    }

    const chatBox = document.getElementById("chatBox");
    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "message user-msg";
    userMsgDiv.innerHTML = `<p>${selectedValue}</p>`;
    chatBox.appendChild(userMsgDiv);
    
    userAnswers.push(selectedValue);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (currentStep < questions.length) {
        setTimeout(() => {
            const nahilaMsgDiv = document.createElement("div");
            nahilaMsgDiv.className = "message nahila-msg";
            nahilaMsgDiv.innerHTML = `<p>${questions[currentStep].text}</p>`;
            chatBox.appendChild(nahilaMsgDiv);
            
            dropdown.innerHTML = '<option value="">একটি অপশন বেছে নিন...</option>';
            questions[currentStep].options.forEach(opt => {
                dropdown.innerHTML += `<option value="${opt}">${opt}</option>`;
            });

            currentStep++;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 800);
    } else {
        setTimeout(() => {
            const inputArea = document.getElementById("inputArea");
            inputArea.innerHTML = "<p style='color:#8D1336; font-weight:bold; width:100%; text-align:center;'>ম্যাচিং সম্পূর্ণ হয়েছে! 🤣</p>";
            
            const randomIndex = Math.floor(Math.random() * funnyGrooms.length);
            const matchedGroom = funnyGrooms[randomIndex];

            const finalMsgDiv = document.createElement("div");
            finalMsgDiv.className = "message nahila-msg";
            finalMsgDiv.innerHTML = `
                <p><strong>নাহিলা আপু:</strong> উফফ আপু! আপনার এই রাজকীয় চাহিদার সাথে মিলিয়ে আমি ঠিক আপনার ভাগ্যেই থাকা এই স্পেশাল পাত্রটিকে খুঁজে বের করেছি! একটু মানিয়ে নিয়েন আর কী! 🙈</p>
            `;
            chatBox.appendChild(finalMsgDiv);

            // ৩. পাত্রের কার্ডে ছবিসহ ডিসপ্লে করা
            setTimeout(() => {
                const groomCardDiv = document.createElement("div");
                groomCardDiv.style.background = "#fff3f6";
                groomCardDiv.style.border = "2px dashed #8D1336";
                groomCardDiv.style.borderRadius = "10px";
                groomCardDiv.style.padding = "15px";
                groomCardDiv.style.marginTop = "10px";
                groomCardDiv.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
                groomCardDiv.style.textAlign = "center";
                
                groomCardDiv.innerHTML = `
                    <h3 style="color: #8D1336; margin-top: 0; margin-bottom:10px;">🤵 বর পাওয়া গেছে!</h3>
                    
                    <!-- পাত্রের ফানি ছবি -->
                    <img src="${matchedGroom.image}" alt="Groom" style="width:120px; height:120px; border-radius:50%; object-fit:cover; border:3px solid #8D1336; margin-bottom:10px;">
                    
                    <p style="text-align:left;"><strong>নাম:</strong> ${matchedGroom.name}</p>
                    <p style="text-align:left;"><strong>বয়স:</strong> ${matchedGroom.age}</p>
                    <p style="text-align:left;"><strong>বর্তমান পেশা:</strong> ${matchedGroom.job}</p>
                    <p style="text-align:left;"><strong>এলাকা:</strong> ${matchedGroom.location}</p>
                    <p style="font-style: italic; color: #555; background: #fff; padding: 8px; border-radius: 5px; text-align:left;"><strong>নাহিলা আপুর মন্তব্য:</strong> ${matchedGroom.bio}</p>
                    <button onclick="window.location.reload()" style="width: 100%; margin-top: 10px; background: #2c040f;">আবার ভাগ্য পরীক্ষা করুন 🔄</button>
                `;
                chatBox.appendChild(groomCardDiv);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);

        }, 800);
    }
}